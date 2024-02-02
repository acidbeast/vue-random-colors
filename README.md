![Logo](http://dimko.org/images/vue-random-colors-logo.png)

# vue-random-colors

Vue 3.x directive for apply random colors to CSS properties of element.
By default directive use 216 web safe colors. More info at https://websafecolors.info
Colors could be re-defined by user, see options section below.

In case you need directive for Vue 2.x you can use tag v2.0.0 or checkout version 2.0.0 from npm.


## Install

```bash
$ npm i --save vue-random-colors
```

And then

**Vue 2.x**

```javascript
import Vue from 'vue'
import VueRandomColor from 'vue-random-colors'
Vue.use(VueRandomColor)
```

**Vue 3.x**

Add directive for Vue component:

```javascript
  <script setup>
    import { randomColors } from 'vue-random-colors'
    const vRandomColor = randomColors
  </script>        
```

Or register globally at the app level:

```javascript
    import { randomColors } from 'vue-random-colors'
    const app = createApp(App)
    app.directive('random-color', randomColors)
    app.mount('#app')
```

More information about custom directives can be found at [Vue](https://vuejs.org/guide/reusability/custom-directives) website.

**Nuxt 3.x**

Use directive in Nuxt as plugin:

```javascript
    import { randomColors } from 'vue-random-colors'
    export default defineNuxtPlugin((nuxtApp) => {
      nuxtApp.vueApp.directive('random-color', randomColors)
    })
```

More information about plugins can be found at [Nuxt](https://nuxt.com/docs/guide/directory-structure/plugins) website.

## Usage

Basic example

```vue
  <div v-random-color>
  ...
  </div>
```

## Options
* `property` _(string)_ - CSS property to apply color. { background | border | color }.  By default: background.
* `event` _(string)_ - Event which evoke color change. By default: mouseover.
* `default` _(string)_ - Default color which apply in case of mouseout or mouseleave. By default: 'ffffff'
* `colors` _(array)_ - List of colors defined by user.
* `transition` _(number)_ - Speed of CSS property transition.


## Example

```vue
  <div v-random-color="{
    colors: [ 'aaaaaa', 'cccccc', 'eeeeee' ],
    event: 'click',
    property: 'border',
    default: 'ff0000',
    transition: 0.5
  }">
  ...
  </div>
```

## Demo

[Here](http://dimko.org/js/vue-random-colors/demo/)

## License

MIT
