import * as util from '../util'
import { MouseHandler } from './handler-mouse'
import { Graph } from '../core'
import { CustomMouseEvent, DomEvent, detector } from '../common'
import { Rectangle, Point } from '../struct'

export class RubberbandHandler extends MouseHandler {
  /**
   * Specifies the default opacity to be used for the rubberband div.
   *
   * Default is 20.
   */
  opacity = 20

  /**
   * Optional fade out effect.
   *
   * Default is `false`.
   */
  fadeOut: boolean = false

  /**
   * Holds the DIV element which is currently visible.
   */
  div: HTMLDivElement | null = null

  /**
   * Holds the DIV element which is used to display the rubberband.
   */
  protected sharedDiv: HTMLDivElement | null = null

  private panHandler: () => void
  private gestureHandler: () => void
  private forceRubberbandHandler: (
    arg: {
      eventName: string,
      e: CustomMouseEvent,
    },
  ) => void
  private dragHandler: null | ((e: MouseEvent) => void)
  private dropHandler: null | ((e: MouseEvent) => void)

  protected origin: Point | null
  protected currentX: number = 0
  protected currentY: number = 0

  protected x: number
  protected y: number
  protected width: number
  protected height: number

  constructor(graph: Graph) {
    super(graph)
    this.graph.addMouseListener(this)

    // Handles force rubberband event
    this.forceRubberbandHandler = ({ eventName, e }) => {
      if (
        eventName === DomEvent.MOUSE_DOWN &&
        this.isForceRubberbandEvent(e)
      ) {
        this.prepare(e)
      }
    }

    this.graph.on(Graph.events.fireMouseEvent, this.forceRubberbandHandler)

    this.panHandler = () => { this.repaint() }
    this.graph.on(Graph.events.pan, this.panHandler)

    this.gestureHandler = () => {
      if (this.origin != null) {
        this.reset()
      }
    }

    this.graph.on(DomEvent.GESTURE, this.gestureHandler)
  }

  /**
   * Returns true if the given event should start rubberband selection.
   */
  protected isForceRubberbandEvent(e: CustomMouseEvent) {
    return DomEvent.isAltDown(e.getEvent())
  }

  protected getPosition(e: CustomMouseEvent) {
    const origin = util.getScrollOrigin(this.graph.container)
    const offset = util.getOffset(this.graph.container)

    origin.x -= offset.x
    origin.y -= offset.y

    return {
      x: e.getClientX() + origin.x,
      y: e.getClientY() + origin.y,
    }
  }

  /**
   * Handles the event by initiating a rubberband selection.
   */
  mouseDown(e: CustomMouseEvent) {
    if (
      this.isEnabled() &&
      this.graph.isEnabled() &&
      !e.isConsumed() &&
      e.getState() == null && // on background
      !DomEvent.isMultiTouchEvent(e.getEvent())
    ) {
      this.prepare(e)
    }
  }

  protected prepare(e: CustomMouseEvent) {
    const { x, y } = this.getPosition(e)
    this.start(x, y)

    // Does not prevent the default for this event so that the
    // event processing chain is still executed even if we start
    // rubberbanding.
    e.consume(false)
  }

  /**
   * Sets the start point for the rubberband selection.
   */
  protected start(x: number, y: number) {
    this.origin = new Point(x, y)

    const container = this.graph.container

    const createEvent = (e: MouseEvent) => {
      const me = new CustomMouseEvent(e)
      const pt = util.clientToGraph(container, me.getClientX(), me.getClientY())

      me.graphX = pt.x
      me.graphY = pt.y

      return me
    }

    this.dragHandler = (e: MouseEvent) => {
      this.mouseMove(createEvent(e))
    }

    this.dropHandler = (e: MouseEvent) => {
      this.mouseUp(createEvent(e))
    }

    // Workaround for rubberband stopping if the
    // mouse leaves the container in Firefox
    if (detector.IS_FIREFOX) {
      DomEvent.addMouseListeners(
        document, null, this.dragHandler, this.dropHandler,
      )
    }
  }

  /**
   * Handles the event by updating therubberband selection.
   */
  mouseMove(e: CustomMouseEvent) {
    if (!e.isConsumed() && this.origin != null) {
      const { x, y } = this.getPosition(e)
      const dx = this.origin.x - x
      const dy = this.origin.y - y
      const tol = this.graph.tolerance

      if (this.div != null || Math.abs(dx) > tol || Math.abs(dy) > tol) {
        if (this.div == null) {
          this.div = this.createShape()
        }

        // Clears selection while rubberbanding. This is required because
        // the event is not consumed in mouseDown.
        util.clearSelection()

        this.update(x, y)
        e.consume()
      }
    }
  }

  /**
   * Creates the rubberband selection shape.
   */
  protected createShape() {
    if (this.sharedDiv == null) {
      this.sharedDiv = document.createElement('div')
      this.sharedDiv.className = 'x6-rubberband'
      this.sharedDiv.style.opacity = `${this.opacity / 100}`
    }

    this.graph.container.appendChild(this.sharedDiv)
    const result = this.sharedDiv

    // if fade out, then create a new div everytime
    if (this.fadeOut) {
      this.sharedDiv = null
    }

    return result
  }

  /**
   * Returns true if this handler is active.
   */
  protected isActive() {
    return this.div != null && this.div.style.display !== 'none'
  }

  mouseUp(e: CustomMouseEvent) {
    const active = this.isActive()
    this.reset()

    if (active) {
      this.execute(e.getEvent())
      e.consume()
    }
  }

  /**
   * Resets the state of this handler and selects the current region
   * for the given event.
   */
  protected execute(e: MouseEvent) {
    const rect = new Rectangle(this.x, this.y, this.width, this.height)
    this.graph.selectCellsInRegion(rect, e)
  }

  protected reset() {
    if (this.div != null) {
      if (this.fadeOut) {
        const temp = this.div
        util.setPrefixedStyle(temp.style, 'transition', 'all 0.2s linear')
        temp.style.pointerEvents = 'none'
        temp.style.opacity = '0'

        window.setTimeout(() => { util.remove(temp) }, 200)
      } else {
        util.remove(this.div)
      }
    }

    DomEvent.removeMouseListeners(
      document, null, this.dragHandler, this.dropHandler,
    )

    this.dragHandler = null
    this.dropHandler = null

    this.currentX = 0
    this.currentY = 0
    this.origin = null
    this.div = null
  }

  protected update(x: number, y: number) {
    this.currentX = x
    this.currentY = y

    this.repaint()
  }

  /**
   * Computes the bounding box and updates the style of the <div>.
   */
  protected repaint() {
    if (this.div && this.origin) {
      const x = this.currentX - this.graph.panDx
      const y = this.currentY - this.graph.panDy

      this.x = Math.min(this.origin.x, x)
      this.y = Math.min(this.origin.y, y)
      this.width = Math.max(this.origin.x, x) - this.x
      this.height = Math.max(this.origin.y, y) - this.y

      this.div.style.left = util.toPx(this.x)
      this.div.style.top = util.toPx(this.y)
      this.div.style.width = util.toPx(Math.max(1, this.width))
      this.div.style.height = util.toPx(Math.max(1, this.height))
    }
  }

  dispose() {
    if (this.disposed) {
      return
    }

    this.graph.removeMouseListener(this)
    this.graph.off(DomEvent.FIRE_MOUSE_EVENT, this.forceRubberbandHandler)
    this.graph.off(DomEvent.PAN, this.panHandler)
    this.graph.off(DomEvent.GESTURE, this.gestureHandler)

    this.reset()

    if (this.sharedDiv != null) {
      this.sharedDiv = null
    }

    super.dispose()
  }
}
