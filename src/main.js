import Vue from "vue";
import App from "./App.vue";

require("./assets/css/style.css");

Vue.config.productionTip = false;

// Vue.component("HelloWorld", require("./components/HelloWorld.vue").default);

new Vue({
  render: h => h(App)
}).$mount("#app");
