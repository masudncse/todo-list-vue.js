import Vue from "vue";
import VeeValidate from "vee-validate";
import App from "./App.vue";
// import store from "./store";
// import router from "./router";
require("./assets/css/style.css");


Vue.use(VeeValidate);
Vue.config.productionTip = false;


// Vue.component("HelloWorld", require("./components/HelloWorld.vue").default);

new Vue({
  // router,
  // store,
  render: h => h(App)
}).$mount("#app");
