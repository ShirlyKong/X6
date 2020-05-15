import { Attr } from '..'
import { KeyValue } from '../../types'
import { Registry } from '../../common'
import { Point, Rectangle } from '../../geometry'
import * as layouts from './main'

export namespace PortLabelLayout {
  export interface Result {
    position: Point.PointLike
    rotation: number
    attrs: Attr.CellAttrs
  }

  export type Definition<T> = (
    portPosition: Point,
    elemBBox: Rectangle,
    args: T,
  ) => Result

  export type CommonDefinition = Definition<KeyValue>
}

export namespace PortLabelLayout {
  export type Presets = typeof PortLabelLayout['presets']

  export type OptionsMap = {
    readonly [K in keyof Presets]-?: Parameters<Presets[K]>[2]
  }

  export type NativeNames = keyof Presets

  export interface NativeItem<T extends NativeNames = NativeNames> {
    name: T
    args?: OptionsMap[T]
  }

  export interface ManaualItem {
    name: Exclude<string, NativeNames>
    args?: KeyValue
  }
}

export namespace PortLabelLayout {
  export const presets = layouts
  export const registry = Registry.create<CommonDefinition, Presets>({
    type: 'port label layout',
  })

  registry.register(presets, true)
}