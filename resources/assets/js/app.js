import Vue from 'vue'
import App from './components/App'

export default new Vue({
    data () {
        return {
            token: null
        }
    },
    render: h => h(App)
});
