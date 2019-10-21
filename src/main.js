import Vue from "vue";
import VeeValidate from "vee-validate";
import App from "./App.vue";

require("./assets/css/style.css");

Vue.use(VeeValidate);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
