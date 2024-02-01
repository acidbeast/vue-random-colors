import { createApp } from 'vue'
import App from './App.vue'

import { randomColors } from '../../src/index.js'

const app = createApp(App)

app.directive('random-color', randomColors)
app.mount('#app')
