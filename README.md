## @hjbdev/vue-flip-toolkit

A fork of [@mattrothenberg](https://github.com/mattrothenberg)'s [`vue-flip-toolkit`](https://github.com/mattrothenberg/vue-flip-toolkit), ported from the incredible [`react-flip-toolkit`](https://github.com/aholachek/react-flip-toolkit), developed by [@aholachek](https://github.com/aholachek)

This fork is functionally exactly the same as `vue-flip-toolkit`, I've ported it to Vue 3 and updated the build tools to use Vite. All the "Source" links in this README have been redirected to the original `vue-flip-toolkit` repo.

I'll work on adding some of the missing props in at some point™

## Quick Start

```bash
yarn add @hjbdev/vue-flip-toolkit
```

Wrap the components you wish to animate with a _single_ `Flipper` component that has a `flipKey` prop. This prop must change every time you want an animation to happen.

Wrap elements that should be animated with `Flipped` components that have a `flipId` prop matching them across renders.

A basic example can be found here: https://codesandbox.io/s/m354w1mmp9

## What's in this library?

This library strives to imitate its parent, `react-flip-toolkit`, as closely as possible. It thus exports the following two components that you can use in your Vue applications. For the sake of brevity, I've lifted descriptions/verbiage from the README of `react-flip-toolkit`, indicated via blockquotes.

### Flipper.vue

> The parent wrapper component that contains all the elements to be animated. You'll most typically need only one of these per page. [Read more –>](https://github.com/aholachek/react-flip-toolkit/blob/master/README.md#basic-props)

**Props**

| prop                     | default      | type                      | details                                                                                                                                                                                                   |
| ------------------------ | ------------ | ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `className`              | –            | `string`                  | A class that will apply to the div rendered by `Flipper`                                                                                                                                                  |
| `flipKey` **(required)** | –            | `string, number, boolean` | Changing this tells `vue-flip-toolkit` to transition child elements wrapped in Flipped components.                                                                                                        |
| `spring`                 | `"noWobble"` | `string, object`          | Provide a string or referencing one of the spring presets — `noWobble`, `veryGentle`, `gentle`, `wobbly`, or `stiff`. Otherwise, pass a [custom spring object](https://codepen.io/aholachek/full/bKmZbV/) |
| `staggerConfig`          | `{}`         | `object`                  | Provide configuration for staggered Flipped children.                                                                                                                                                     |

### Flipped.vue

> Wraps an element that should be animated.

**Props**

| prop                    | default | type       | details                                                                                                                                                                                                                                                                                                                                                         |
| ----------------------- | ------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `flipId` **(required)** | –       | `string`   | Use this to tell `vue-flip-toolkit` how elements should be matched across renders so they can be animated.                                                                                                                                                                                                                                                      |
| `inverseFlipId`         | –       | `string`   | Refer to the id of the parent `Flipped` container whose transform you want to cancel out. If this prop is provided, the `Flipped` component will become a limited version of itself that is only responsible for cancelling out its parent transform. It will read from any provided transform props and will ignore all other props (besides `inverseFlipId`.) |
| `stagger`               | –       | `string`   | Provide a natural, spring-based staggering effect in which the spring easing of each item is pinned to the previous one's movement. If you want to get more granular, you can provide a string key and the element will be staggered with other elements with the same key.                                                                                     |
| `delayUntil`            | –       | `string`   | Delay an animation by providing a reference to another Flipped component that it should wait for before animating (the other Flipped component should have a stagger delay as that is the only use case in which this prop is necessary.)                                                                                                                       |
| `shouldInvert`          | –       | `function` | A function provided with the current and previous `decisionData` props passed down by the Flipper component. Returns a boolean indicating whether to apply inverted transforms to all `Flipped` children that request it via an `inverseFlipId`.                                                                                                                |
| `shouldFlip`            | –       | `function` | A function provided with the current and previous decisionData props passed down by the `Flipper` component. Returns a `boolean` to indicate whether a `Flipped` component should animate at that particular moment or not.                                                                                                                                     |
| `opacity`               | false   | `boolean`  |                                                                                                                                                                                                                                                                                                                                                                 |
| `scale`                 | false   | `boolean`  | Tween `scaleX` and `scaleY`                                                                                                                                                                                                                                                                                                                                     |
| `translate`             | false   | `boolean`  | Tween `translateX` and `translateY`                                                                                                                                                                                                                                                                                                                             |

**Events**

| eventName    | args                           | details                                      |
| ------------ | ------------------------------ | -------------------------------------------- |
| @on-start    | `{el: DOMElement, id: String}` | Emitted when the `flipped` animation begins. |
| @on-complete | `{el: DOMElement, id: String}` | Emitted when the `flipped` animation begins. |

## Cool, so how do I use it?

Install the library

```bash
yarn add vue-flip-toolkit
```

Import the respective components.

```js
import { Flipper, Flipped } from "vue-flip-toolkit";
```

Register the components.

```vue
// Example.vue
<script>
export default {
  components: {
    Flipped,
    Flipper
  }
};
</script>
```

## OK, time for some examples.

You got it.

### 1) Simple, Expanding Div Animation

[Source](https://github.com/mattrothenberg/vue-flip-toolkit/blob/master/stories/Simple.vue)

<img width="600" src="https://i.imgur.com/CQmQwjA.gif" />

### 2) Two Divs

[Source](https://github.com/mattrothenberg/vue-flip-toolkit/blob/master/stories/Double.vue)

<img width="600" src="https://i.imgur.com/XeuEjHP.gif" />

### 3) List Shuffle Animation

[Source](https://github.com/mattrothenberg/vue-flip-toolkit/blob/master/stories/List.vue)

<img width="600" src="https://i.imgur.com/PWGSyKm.gif" />

### 4) List Shuffle Animation (Staggered)

[Source](https://github.com/mattrothenberg/vue-flip-toolkit/blob/master/stories/List.vue)

<img width="600" src="https://i.imgur.com/at4wCpg.gif" />


### 5) Accordion (Staggered)

[Source](https://github.com/mattrothenberg/vue-flip-toolkit/blob/master/stories/Accordion.vue)

<img width="600" src="https://i.imgur.com/okjVltu.gif" />


### 6) Scale Animation + Anime.js

[Source](https://github.com/mattrothenberg/vue-flip-toolkit/blob/master/stories/Scale.vue)

<img width="600" src="https://i.imgur.com/BpQvrfG.gif" />

### 7) Material Design inspired animation

[Source](https://github.com/mattrothenberg/vue-flip-toolkit/blob/master/stories/Material.vue)

<img width="600" src="https://i.imgur.com/b00260y.gif" />

### 8) Vue Router Example

This example is very much a WIP. Nonetheless, it illustrates at a high-level how to use `vue-flip-toolkit` with `vue-router`, as well as hook into the `@on-complete` and `@on-start` events.

[Source](https://github.com/mattrothenberg/vue-flip-toolkit/blob/master/stories/IconsHome.vue)

<img width="600" src="https://i.imgur.com/UBVjF4b.gif" />
