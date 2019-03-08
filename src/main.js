import Vue from 'vue';

import router from './routes/routes'
import App from './App'

// Styles
import "./assets/scss/style.scss"

// Javascript files
// import "./assets/js/jquery.min.js"
// import "./assets/js/jquery.scrolly.min.js"
// import "./assets/js/jquery.dropotron.min.js"
// import "./assets/js/jquery.scrollex.min.js"
// import "./assets/js/browser.min.js"
// import "./assets/js/breakpoints.min.js"
// import "./assets/js/util.js"
// import "./assets/js/main.js"

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router: router,
  render: h => h(App),
});
