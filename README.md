# vue-random-color


[![github license](https://badgen.net/github/license/acidbeast/vue-random-color)](https://github.com/acidbeast/vue-random-color/blob/master/LICENSE)


Vue 2.x directive for apply random colors to CSS properties of component.
By default directive use 216 web safe colors. More info at https://websafecolors.info
Colors could be re-defined by user, see options section below.


## Install

```bash
$ npm i --save vue-random-color
```

And then

```javascript
import Vue from 'vue'
import VueRandomColor from 'vue-random-color'

Vue.use(VueRandomColor)
```

## Usage

Basic example

```vue
  <div v-random-color>
  ...
  </div>
```

# Options
* `property` _(string)_ - CSS property to apply color. { background | border | color }.  By default: background.
* `event` _(string)_ - Event which evoke color change. By default: mouseover.
* `default` _(string)_ - Default color which apply in case of mouseout or mouseleave. By default: 'ffffff'
* `colors` _(array)_ - List of colors defined by user. Example: ['cccccc','aaaaaa','bbbbbb']
* `transition` _(number)_ - Speed of CSS property transition.


#Examples

Set list of colors:

```vue
  <div v-random-color="{ color: [ 'aaaaaa', 'cccccc', 'eeeeee' ] }">
  ...
  </div>
```

Set property:

```vue
  <div v-random-color="{ property: 'color' }">
  ...
  </div>
```

Set event:

```vue
  <div v-random-color="{ event: 'click' }">
  ...
  </div>
```

Change default color:

```vue
  <div v-random-color="{ default: 'ff0000' }">
  ...
  </div>
```

Set transition speed:

```vue
  <div v-random-color="{ transition: 0.5 }">
  ...
  </div>
```

Combination:

```vue
  <div v-random-color="{ event: 'click', property: 'border', default: 'ff0000', transition: 0.5 }">
  ...
  </div>
```


# Demo

Here

# License

MIT

