import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.component("component-foo", {
  template: `<div>Foo component</div>`
});

Vue.component("component-bar", {
  template: `<div>Bar component</div>`
});

new Vue({
  render: (h) => h(App)
}).$mount("#app");
