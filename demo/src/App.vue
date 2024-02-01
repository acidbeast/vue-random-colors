<template>
  <div id="app">
    <h1 class="title">Background</h1>
    <div class="vrc-demo">
      <div class="vrc-demo__circle" v-random-color="{ event: 'mouseover' }">Mouseover</div>
      <div class="vrc-demo__circle" v-random-color="{ event: 'click' }">Click</div>
      <div class="vrc-demo__circle" v-random-color="{ event: 'dblclick' }">Double click</div>
    </div>
    <h1 class="title">Border Color</h1>
    <div class="vrc-demo">
      <div class="vrc-demo__circle" v-random-color="{ event: 'mouseover', property: 'border' }">Mouseover</div>
      <div class="vrc-demo__circle" v-random-color="{ event: 'click', property: 'border' }">Click</div>
      <div class="vrc-demo__circle" v-random-color="{ event: 'dblclick', property: 'border' }">Double click</div>
    </div>
    <h1 class="title">Color</h1>
    <div class="vrc-demo">
      <div class="vrc-demo__circle" v-random-color="{ event: 'mouseover', property: 'color' }">Mouseover</div>
      <div class="vrc-demo__circle" v-random-color="{ event: 'click', property: 'color' }">Click</div>
      <div class="vrc-demo__circle" v-random-color="{ event: 'dblclick', property: 'color' }">Double click</div>
    </div>
    <h1 class="title">Default Color for mouseout/mouseleave events</h1>
    <div class="vrc-demo">
      <div class="vrc-demo__circle" v-random-color="{ event: 'mouseover', property: 'background', default: 'cccccc' }">Mouseover</div>
      <div class="vrc-demo__circle" v-random-color="{ event: 'mouseover', property: 'border', default: 'cccccc' }">Mouseover</div>
      <div class="vrc-demo__circle" v-random-color="{ event: 'mouseover', property: 'color', default: 'cccccc' }">Mouseover</div>
    </div>
    <h1 class="title">Custom list of colors</h1>
    <div class="vrc-demo">
      <div
        class="vrc-demo__circle"
        v-random-color="{
          event: 'mouseover',
          property: 'background',
          default: 'ffffff',
          colors: ['ff0000', '00ff00', '0000ff']
        }">Mouseover</div>
      <div
        class="vrc-demo__circle"
        v-random-color="{
          event: 'mouseover',
          property: 'border',
          default: 'cccccc',
          colors: ['ff0000', '00ff00', '0000ff']
        }">Mouseover</div>
      <div
        class="vrc-demo__circle"
        v-random-color="{ event: 'mouseover',
        property: 'color',
        default: '000000',
        colors: ['ff0000', '00ff00', '0000ff']
      }">Mouseover</div>
    </div>
    <h1 class="title">Transition</h1>
    <div class="vrc-demo">
      <div class="vrc-demo__circle" v-random-color="{ event: 'mouseover', property: 'background', default: 'ffffff', transition: 1 }">Mouseover</div>
      <div class="vrc-demo__circle" v-random-color="{ event: 'mouseover', property: 'border', default: 'cccccc', transition: 1 }">Mouseover</div>
      <div class="vrc-demo__circle" v-random-color="{ event: 'mouseover', property: 'color', default: '000000', transition: 1 }">Mouseover</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    components: {}
  }
</script>

<style scoped>
  .title {
    text-align: center;
  }
  .vrc-demo {
    padding: 50px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
  }
  .vrc-demo__circle {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 200px;
    border: 2px solid #cccccc;
    border-radius: 100px;
    font-size: 18px;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
</style>
