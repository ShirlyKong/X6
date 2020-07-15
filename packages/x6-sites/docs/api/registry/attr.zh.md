---
title: Attr
order: 0
redirect_from:
  - /zh/docs/api
  - /zh/docs/api/registry
---

在 Attr 命名空间中提供了注册和管理特殊属性的方法，以及所有特殊属性的定义。

## presets

我们在 `presets` 命名空间下挂载了所有特殊属性的定义。

### ref

指向一个元素的 CSS 选择器，指代了那些以 `ref` 开头的属性的参照元素。

### refX

设置元素 `x` 坐标，目标 `x` 坐标相对于 [`ref`](#ref) 指代的参照元素的左上角 `x` 坐标（参照 `x` 坐标）

- 当其值在 `[0, 1]` 之间或为百分比（如 `50%`）时，表示目标 `x` 坐标是参照 `x` 坐标相对于参照元素宽度百分比的相对偏移量。例如 `refX: 0.5` 表示，目标 `x` 坐标在参照 `x` 坐标基础上，向右偏移参照宽度的 `50%`。
- 当其值 `<0` 或 `>1` 时，表示目标 `x` 坐标是参照 `x` 坐标的绝对偏移量。例如 `refX: 20` 表示，目标 `x` 坐标在参照 `x` 坐标基础上，向右偏移 `20px`。

### refX2

与 [`refX`](#refx) 一样，当需要同时指定相对偏移量和绝对偏移量时使用。

```ts
{ 
  refX: '50%', 
  refX2: 20,
} 
```

上面代码表示，目标 `x` 坐标在参照 `x` 坐标的基础上，向右偏移参照元素宽度的 `50%` 并加上 `20px`。

### refY

设置元素 `y` 坐标，目标 `y` 坐标相对于 [`ref`](#ref) 指代的参照元素的左上角 `y` 坐标（参照 `y` 坐标）

- 当其值在 `[0, 1]` 之间或为百分比（如 `50%`）时，表示目标 `y` 坐标是参照 `y` 坐标相对于参照元素高度百分比的相对偏移量。例如 `refY: 0.5` 表示，目标 `y` 坐标在参照 `y` 坐标基础上，向下偏移参照高度的 `50%`。
- 当其值 `<0` 或 `>1` 时，表示目标 `y` 坐标是参照 `y` 坐标的绝对偏移量。例如 `refY: 20` 表示，目标 `y` 坐标在参照 `y` 坐标基础上，向下偏移 `20px`。

### refY2

与 [`refY`](#refy) 一样，当需要同时指定相对偏移量和绝对偏移量时使用。

```ts
{ 
  refY: '50%', 
  refY2: 20,
} 
```

上面代码表示，目标 `y` 坐标在参照 `y` 坐标的基础上，向下偏移参照元素高度的 `50%` 并加上 `20px`。

### refDx

设置元素 `x` 坐标，目标 `x` 坐标相对于 [`ref`](#ref) 指代的参照元素的右下角 `x` 坐标（参照 `x` 坐标）

- 当其值在 `[0, 1]` 之间或为百分比（如 `50%`）时，表示目标 `x` 坐标是参照 `x` 坐标相对于参照元素宽度百分比的相对偏移量。例如 `refDx: 0.5` 表示，目标 `x` 坐标在参照 `x` 坐标基础上，向右偏移参照宽度的 `50%`。
- 当其值 `<0` 或 `>1` 时，表示目标 `x` 坐标是参照 `x` 坐标的绝对偏移量。例如 `refDx: 20` 表示，目标 `x` 坐标在参照 `x` 坐标基础上，向右偏移 `20px`。

### refDy

设置元素 `y` 坐标，目标 `y` 坐标相对于 [`ref`](#ref) 指代的参照元素的右下角 `y` 坐标（参照 `y` 坐标）

- 当其值在 `[0, 1]` 之间或为百分比（如 `50%`）时，表示目标 `y` 坐标是参照 `y` 坐标相对于参照元素高度百分比的相对偏移量。例如 `refDy: 0.5` 表示，目标 `y` 坐标在参照 `y` 坐标基础上，向下偏移参照高度的 `50%`。
- 当其值 `<0` 或 `>1` 时，表示目标 `y` 坐标是参照 `y` 坐标的绝对偏移量。例如 `refDy: 20` 表示，目标 `y` 坐标在参照 `y` 坐标基础上，向下偏移 `20px`。

### refWidth

设置元素宽度，宽度计算相对于 [`ref`](#ref) 指代的参照元素的宽度（参照宽度）

- 当其值在 `[0, 1]` 之间或为百分比（如 `75%`）时，表示元素的宽度是参照宽度百分之多少。例如 `refWidth: 0.75` 表示元素的宽度是参照宽度的 `75%`。
- 当其值 `<0` 或 `>1` 时，表示元素的宽度在参照宽度的基础上减少或增加多少。例如 `refWidth: 20` 表示元素比相对元素宽 `20px`。

需要注意的是，该属性只适用于那些支持宽度 `width` 和高度 `height` 的元素，如 `<rect>` 元素。

### refWidth2

与 [`refWidth`](#refwidth) 一样，当需要同时指定绝对宽度和相对宽度时使用。

```ts
{ 
  refWidth: 20, 
  refWidth2: '75%',
}
```

上面代码表示目标宽度是参照宽度 `75%` 并加上 `20px`。

### refHeight

设置元素高度，高度计算相对于 [`ref`](#ref) 指代的参照元素的高度（参照高度）

- 当其值在 `[0, 1]` 之间或为百分比（如 `75%`）时，表示元素的高度是参照高度百分之多少。例如 `refHeight: 0.75` 表示元素的高度是参照高度的 `75%`。
- 当其值 `<0` 或 `>1` 时，表示元素的高度在参照高度的基础上减少或增加多少。例如 `refHeight: 20` 表示元素比相对元素高 `20px`。
  
需要注意的是，该属性只适用于那些支持宽度 `width` 和高度 `height` 的元素，如 `<rect>` 元素。

### refHeight2

与 [`refHeight`](#refheight) 一样，当需要同时指定绝对宽度和相对宽度时使用。

```ts
{ 
  refHeight: 20, 
  refHeight2: '75%',
}
```

上面代码表示目标高度是参照高度 `75%` 并加上 `20px`。

### refCx

设置元素中心 `x` 坐标，即[原生 `cx` 属性](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/cx)，目标值计算相对于 [`ref`](#ref) 指代的参照元素的宽度（参照宽度）

- 当其值在 `[0, 1]` 之间或为百分比（如 `75%`）时，表示元素的 `cx` 是参照宽度百分之多少。例如 `refCx: 0.75` 表示元素中心 `x` 坐标位于参照宽度的 `75%` 处。
- 当其值 `<0` 或 `>1` 时，表示元素的 `cx` 是在参照宽度的基础上减少或增加多少。例如 `refCx: 20` 表示元素中心 `x` 坐标位于参照宽度加 `20px` 处。

需要注意的是，该属性只适用于那些支持 `cx` 和 `cy` 属性的元素，如 `<ellipse>` 元素。


### refCy

设置元素中心 `y` 坐标，即[原生 `cy` 属性](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/cy)，目标值计算相对于 [`ref`](#ref) 指代的参照元素的高度（参照高度）

- 当其值在 `[0, 1]` 之间或为百分比（如 `75%`）时，表示元素的 `cy` 是参照高度百分之多少。例如 `refCy: 0.75` 表示元素中心 `y` 坐标位于参照高度的 `75%` 处。
- 当其值 `<0` 或 `>1` 时，表示元素的 `cy` 是在参照宽度的基础上减少或增加多少。例如 `refCy: 20` 表示元素中心 `y` 坐标位于参照高度加 `20px` 处。

需要注意的是，该属性只适用于那些支持 `cx` 和 `cy` 属性的元素，如 `<ellipse>` 元素。

### refRx

设置元素的 [`rx` 属性](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/rx)，目标值计算相对于 [`ref`](#ref) 指代的参照元素的宽度（参照宽度）

- 当其值在 `[0, 1]` 之间或为百分比（如 `75%`）时，表示元素的 `rx` 是参照宽度百分之多少。例如 `refRx: 0.75` 表示元素的 `rx` 是参照宽度的 `75%`。
- 当其值 `<0` 或 `>1` 时，表示元素的 `rx` 是在参照宽度的基础上减少或增加多少。例如 `refRx: 20` 表示元素的 `rx` 是参照宽度加 `20px`。

需要注意的是，该属性只适用于那些支持 `rx` 和 `ry` 属性的元素，如 `<rect>` 元素。

### refRy

设置元素的 [`ry` 属性](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/ry)，目标值计算相对于 [`ref`](#ref) 指代的参照元素的高度（参照高度）

- 当其值在 `[0, 1]` 之间或为百分比（如 `75%`）时，表示元素的 `ry` 是参照高度百分之多少。例如 `refRy: 0.75` 表示元素的 `ry` 是参照高度的 `75%`。
- 当其值 `<0` 或 `>1` 时，表示元素的 `ry` 是在参照宽度的基础上减少或增加多少。例如 `refRy: 20` 表示元素的 `ry` 是参照高度加 `20px`。

需要注意的是，该属性只适用于那些支持 `rx` 和 `ry` 属性的元素，如 `<rect>` 元素。

### refRCircumscribed

设置元素的 [`r` 属性](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/r)，目标值相对于 [`ref`](#ref) 指代的参照元素的**对角线长度**（参照长度）

- 当其值在 `[0, 1]` 之间或为百分比（如 `75%`）时，表示 `r` 是参照长度百分之多少。例如 `refRCircumscribed: 0.75` 表示 `r` 是参照长度的 `75%`。
- 当其值 `<0` 或 `>1` 时，表示 `r` 是在参照长度的基础上减少或增加多少。例如 `refRCircumscribed: 20` 表示 `r` 是参照长度加 `20px`。

需要注意的是，该属性只适用于那些支持 `r` 属性的元素，如 `<rect>` 元素。

### refRInscribed

*简称*：**`refR`**

设置元素的 [`r` 属性](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/r)，目标值相对于 [`ref`](#ref) 指代的参照元素的**宽高的最小值**（参照长度）

- 当其值在 `[0, 1]` 之间或为百分比（如 `75%`）时，表示 `r` 是参照长度百分之多少。例如 `refRInscribed: 0.75` 表示 `r` 是参照长度的 `75%`。
- 当其值 `<0` 或 `>1` 时，表示 `r` 是在参照长度的基础上减少或增加多少。例如 `refRInscribed: 20` 表示 `r` 是参照长度加 `20px`。

需要注意的是，该属性只适用于那些支持 `r` 属性的元素，如 `<rect>` 元素。

### refDKeepOffset

设置 `<path>` 元素的 [`d` 属性](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d)。通过缩放原始的 pathData 使目标 `<path>` 元素的大小与 [`ref`](#ref) 指代的参照元素的大小一样，通过平移原始的 pathData 使目标 `<path>` 元素的起点坐标与 [`ref`](#ref) 指代的参照元素的起点坐标对齐。

同时，提供的 pathData 的偏移量将被保留，这意味着如果提供的 pathData 的左上角不在坐标原点 `0, 0`，当 `<path>` 元素被渲染到画布后这个偏移量将被保留。

```ts
import { Graph, Node } from '@antv/x6'
import '@antv/x6/es/index.css'

const Path = Node.define({
  markup: [{ tagName: 'path' }],
  attrs: {
    path: {
      refDKeepOffset: 'M 10 10 30 10 30 30 z', // path offset is 10,10
      fill: 'red',
      stroke: 'black',
    },
  },
})

const container = document.getElementById('container')!
const graph = new Graph({
  container,
  width: 800,
  height: 80,
  grid: true,
})

const path = new Path().resize(40, 40).addTo(graph)
const view = graph.findView(path)
console.log(view.findOne('path').getAttribute('d'))
// 'M 10 10 50 10 50 50 z'
```

### refDResetOffset

*简称*：**`refD`**

设置 `<path>` 元素的 [`d` 属性](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d)。通过缩放原始的 pathData 使目标 `<path>` 元素的大小与 [`ref`](#ref) 指代的参照元素的大小一样，通过平移原始的 pathData 使目标 `<path>` 元素的起点坐标与 [`ref`](#ref) 指代的参照元素的起点坐标对齐。

同时，提供的 pathData 的偏移量将被移除，这意味着如果提供的 pathData 的左上角不在坐标原点 `0, 0`，将同时通过平移使其位于原点，当 `<path>` 元素被渲染到画布后将于参照元素严格对齐。

```ts
import { Graph, Node } from '@antv/x6'
import '@antv/x6/es/index.css'

const Path = Node.define({
  markup: [{ tagName: 'path' }],
  attrs: {
    path: {
      refDResetOffset: 'M 10 10 30 10 30 30 z', // path offset is 10,10
      fill: 'red',
      stroke: 'black',
    },
  },
})

const container = document.getElementById('container')!
const graph = new Graph({
  container,
  width: 800,
  height: 80,
  grid: true,
})

const path = new Path().resize(40, 40).addTo(graph)
const view = graph.findView(path)
console.log(view.findOne('path').getAttribute('d'))
// 'M 0 0 40 0 40 40 z'
```

### resetOffset

当 `resetOffset` 属性值为 `true` 时，将平移点阵，使点阵的左上角位于原点。

```ts
path.attr({
  path: {
    d: 'M 10 10 20 20', 
    resetOffset: true, // 平移后的 d 属性值为 "M 0 0 10 10"
  }
})
```

### refPointsKeepOffset

设置 `<polygon>` 或 `<polyline>` 元素的 [points 属性](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/points)，通过缩放原始点阵使目标元素的大小与 [`ref`](#ref) 指代的参照元素的大小一样，通过平移原始点阵使目标元素的起点坐标与 [`ref`](#ref) 指代的参照元素的起点坐标对齐。

同时，点阵的偏移量将被保留，这意味着如果点阵的左上角不在坐标原点 `0, 0`，当元素被渲染到画布后这个偏移量将被保留。

```ts
import { Graph, Node } from '@antv/x6'
import '@antv/x6/es/index.css'

const Polygon = Node.define({
  markup: [{ tagName: 'polygon' }],
  attrs: {
    polygon: {
      refPointsKeepOffset: '10,10 30,10 30,30', // points offset is 10,10
      fill: 'red',
      stroke: 'black',
    },
  },
})

const container = document.getElementById('container')!
const graph = new Graph({
  container,
  width: 800,
  height: 80,
  grid: true,
})

const polygon = new Polygon().resize(40, 40).addTo(graph)
const view = graph.findView(polygon)
console.log(view.findOne('polygon').getAttribute('points'))
// '10,10 50,10 50,50'
```

### refPointsResetOffset

*简称*：**`refPoints`**

设置 `<polygon>` 或 `<polyline>` 元素的 [points 属性](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/points)，通过缩放原始点阵使目标元素的大小与 [`ref`](#ref) 指代的参照元素的大小一样，通过平移原始点阵使目标元素的起点坐标与 [`ref`](#ref) 指代的参照元素的起点坐标对齐。

同时，点阵的偏移量将被移除，这意味着如果点阵的左上角不在坐标原点 `0, 0`，将同时通过平移使其位于原点，当 `<path>` 元素被渲染到画布后将于参照元素严格对齐。

```ts
import { Graph, Node } from '@antv/x6'
import '@antv/x6/es/index.css'

const Polygon = Node.define({
  markup: [{ tagName: 'polygon' }],
  attrs: {
    polygon: {
      refPointsResetOffset: '10,10 30,10 30,30', // points offset is 10,10
      fill: 'red',
      stroke: 'black',
    },
  },
})

const container = document.getElementById('container')!
const graph = new Graph({
  container,
  width: 800,
  height: 80,
  grid: true,
})

const polygon = new Polygon().resize(40, 40).addTo(graph)
const view = graph.findView(polygon)
console.log(view.findOne('polygon').getAttribute('points'))
// '100,0 40,0 40,40'
```

### xAlign

元素与其 `x` 坐标在水平方向的对齐方式。

- `'left'` 目标元素的左侧与 `x` 对齐。
- `'middle'` 目标元素的中心与 `x` 对齐。
- `'right'` 目标元素的右侧与 `x` 对齐。

<iframe
     src="https://codesandbox.io/embed/x6-attr-xy-align-6h5kc?fontsize=14&hidenavigation=1&theme=light&view=preview"
     style="width:100%; height:340px; border:1px solid #f0f0f0; border-radius: 4px; overflow:hidden;"
     title="x6-attr-xy-align"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

### yAlign

元素与 `y` 坐标在垂直方向的对齐方式。

- `'top'` 目标元素的顶部与 `y` 对齐。
- `'middle'` 目标元素的中心与 `y` 对齐。
- `'bottom'` 目标元素与的底部与 `y` 对齐。


### fill

当提供的 `fill` 属性值为对象时，表示使用渐变色填充，否则使用字符串颜色填充。

```ts
rect.attr('body/fill', {
  type: 'linearGradient',
  stops: [
    { offset: '0%',  color: '#E67E22' },
    { offset: '20%', color: '#D35400' },
    { offset: '40%', color: '#E74C3C' },
    { offset: '60%', color: '#C0392B' },
    { offset: '80%', color: '#F39C12' },
  ],
})
```

### filter

当提供的 `filter` 属性值为对象时，表示使用自定义滤镜填充，否则使用原生字符串形式（如 `"url(#myfilter)"`）。

```ts
rect.attr('body/filter', {
  name: 'dropShadow',
  args: {
    dx: 2,
    dy: 2,
    blur: 3,
  },
})
```

### stroke

当提供的 `stroke` 属性值为对象时，表示使用渐变色填充，否则使用字符串颜色填充。使用方式与 [fill](#fill) 属性一样。

### style

使用 jQuery 的 [`css()`](https://api.jquery.com/css) 方法为指定的元素应用行内 CSS 样式。

### html

使用 jQuery 的 [`html()`](https://api.jquery.com/html) 方法为指定的元素设置 innerHTML。

### title

为指定的元素添加一个 `<title>` 子元素，`<title>` 元素并不影响渲染结果，而只是添加一个描述性说明。

```ts
rect.attr('body/title', 'Description of the rectangle')
```

### text

仅适用于 `<text>` 元素，用于设置文本内容。如果提供的文本是单行文本（不包含换行符 `'\n'`），那么文本被直接设置为 `<text>` 元素的内容；否则为每一行文本将创建一个 `<tspan>` 元素，然后将该元素添加到`<text>` 元素中，

### textWrap

仅适用于 `<text>` 元素，用于设置文本内容。与 [`text`](#text) 属性不同的是，该属性将自动为文本添加换行，使提供的文本完全被包围在参照元素的包围盒（bounding box）中。

其属性值为一个简单对象，通过 `text` 来指定文本内容。可以提供可以选的 `width` 和 `height` 选项来调整元素的大小，当为负数时，表示减少相应的宽度或高度（相当于为文本设置了对应的 padding 边距）；反之为正数时，增加相应的宽度或高度；当为百分比时，表示高度或宽度是参照元素宽度或高度的多少百分比。

当提供的文本超出显示范围时，文本将被自动截断，如果 `ellipsis` 选项被设置为 `true` ，则在截断文本的末尾添加一个省略号 `...`。

```ts
textWrap: {
  text: 'lorem ipsum dolor sit amet consectetur adipiscing elit',
  width: -10,     // 宽度减少 10px
  height: '50%',  // 高度为参照元素高度的一半
  ellipsis: true, // 文本超出显示范围时，自动添加省略号
}
```

### textPath

仅适用于 `<text>` 元素，用于渲染沿路径的文本。

当提供的属性值为字符串时，表示文本沿字符串（pathData）代表的路径渲染。

当提供的属性值为对象时，可以通过 `d` 选项来指定文本的渲染路径，或者通过 `selector` 来指定一个节点/边中的 SVGPathElement 元素，支持 CSS 选择器和 [Markup]() 中定义的选择器。同时可以通过 `startOffset` 选项来指定文本在路径中的位置，例如 `50%` 表示文本在沿路径 `50%` 处，`20` 表示文本在偏离路径起点 `20px` 处。

### lineHeight

仅适用于 `<text>` 元素，用于指定文本的[行高](https://www.w3.org/TR/SVG/text.html#LineHeightProperty)。

### textVerticalAnchor

仅适用于 `<text>` 元素，元素与 `y` 坐标在垂直方向的对齐方式。。

- `'top'` 目标元素的顶部与 `y` 对齐。
- `'middle'` 目标元素的中心与 `y` 对齐。
- `'bottom'` 目标元素与的底部与 `y` 对齐。

<iframe
     src="https://codesandbox.io/embed/x6-attr-text-anchor-8osyo?fontsize=14&hidenavigation=1&theme=light&view=preview"
     style="width:100%; height:410px; border:1px solid #f0f0f0; border-radius: 4px; overflow:hidden;"
     title="x6-attr-text-anchor"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-autoplay allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>


### connection

仅适用于边的 `<path>` 元素，当该属性为 `true` 时，表示将在该元素上渲染边，即设置该元素的 [`d`](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d) 为边的 pathData。 

```ts
edge.attr('pathSelector', { 
  connection: true, 
  stroke: 'red', 
  fill: 'none',
})
```

也支持包含 `stubs` 选项的对象。

- 当 `stubs` 为正数时，表示渲染的起始和终止部分长度。例如 `nnection: { stubs: 20 }` 表示连线只渲染起始的 `20px` 和终止的 `20px`，其余部分不渲染。
- 当 `stubs` 为负数时，表示中间缺失（不渲染）部分的长度。例如 `nnection: { stubs: -20 }` 表示连线中间有 `20px` 不渲染。

```ts
edge.attr('pathSelector', { 
  connection: { stubs: -20 },
})
```

### atConnectionLengthKeepGradient

*简称*：**`atConnectionLength`**

将边中的指定元素移动到指定偏移量的位置处，并自动旋转元素，使其方向与所在位置边的切线方向保持一致。

- 为正数时，表示距离边起点的偏移量。
- 为负数时，表示距离边终点的偏移量。

```ts
edge.attr('rectSelector', { 
  atConnectionLengthKeepGradient: 30, 
  // atConnectionLength: 30, 
  width: 10, 
  height: 10, 
  fill: 'red',
})
```

### atConnectionLengthIgnoreGradient

将边中的指定元素移动到指定偏移量的位置处，忽略边的方向，即不会像 [`atConnectionLengthKeepGradient`](#atconnectionlengthkeepgradient) 属性那样自动旋转元素。

- 为正数时，表示距离边起点的偏移量。
- 为负数时，表示距离边终点的偏移量。

```ts
edge.attr('rectSelector', { 
  atConnectionLengthIgnoreGradient: 30, 
  width: 10, 
  height: 10, 
  fill: 'red',
})
```


### atConnectionRatioKeepGradient

*简称*：**`atConnectionRatio`**

将边中的指定元素移动到指定比例 `[0, 1]` 位置处，并自动旋转元素，使其方向与所在位置边的切线方向保持一致。

```ts
edge.attr('rectSelector', { 
  atConnectionRatioKeepGradient: 0.5, 
  // atConnectionRatio: 0.5, 
  width: 10, 
  height: 10, 
  fill: 'red',
})
```

### atConnectionRatioIgnoreGradient

将边中的指定元素移动到指定比例 `[0, 1]` 位置处，忽略边的方向，即不会像 [`atConnectionRatioKeepGradient`](#atconnectionratiokeepgradient) 属性那样自动旋转元素。

```ts
edge.attr('rectSelector', { 
  atConnectionRatioIgnoreGradient: 0.5, 
  width: 10, 
  height: 10, 
  fill: 'red',
})
```


### sourceMarker

适用于所有 `<path>` 元素，在路径的起点添加一个 SVG 元素（如起始箭头），并自动旋转该元素，使其与根据路径方向保持一致。了解更多详情请参考[这篇教程](../../tutorial/intermediate/marker)。

```ts
edge.attr('connection/sourceMarker', {
  tagName: 'circle',
  fill: '#666',
  stroke: '#333',
  r: 5,
  cx: 5,
})
```


### targetMarker

适用于所有 `<path>` 元素，在路径的终点添加一个 SVG 元素（如终点箭头），并自动旋转该元素，使其与根据路径方向保持一致。了解更多详情请参考[这篇教程](../../tutorial/intermediate/marker)。

需要注意的是，该元素初始时就被旋转了 `180` 度，在此基础上再自动调整旋转角度，并与路径的方向保持一致。例如，对于一个水平的直线，我们为其起点指定了一个向左的箭头，我们也可以为其重点指定相同的箭头，这个箭头会自动指向右侧（自动旋转了 `180` 度）。


### vertexMarker

适用于所有 `<path>` 元素，使用方法与 [`sourceMarker`](#sourcemarker) 一致，将在 `<path>` 元素所有顶点位置添加额外元素。


### magnet

当 `magnet` 属性为 `true` 时，表示该元素可以被链接，即在连线过程中可以被当做连线的起点或终点，与链接桩类似。

### port

为标记为 [`magnet`](#magnet) 的元素指定链接桩 ID，当边链接到该元素时，该 ID 将保存到边的 `source` 或 `target` 中。

- 为字符串时，该字符串作为链接桩 ID。
- 为对象时，对象的 `id` 属性值将作为链接桩 ID。


### event

在指定的元素上自定义一个点击事件，然后可以在 Graph 上添加该事件的回调。

```ts
node.attr({
  // 表示一个删除按钮，点击时删除该节点
  image: {
    event: 'node:delete',
    xlinkHref: 'trash.png',
    width: 20,
    height: 20,
  }
})

// 绑定事件回调，触发时删除节点
graph.on('node:delete', ({ view, e }) => {
  e.stopPropagation()
  view.cell.remove()
})
```

## registry