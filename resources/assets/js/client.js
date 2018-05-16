import app from './app'

app.$data.token = document.head.querySelector('meta[name="csrf-token"]').content

window.app = app

app.$mount('#app')
