import service from "./app/service";
// import store from "./app/model/vuex";
import router from "./app/router";
// service.common.get('user_info_get')

import Vue from "vue";
import Vuex from "vuex";
import { render } from "./app";
import modules1 from "./app/model/vuex/modules/test";
import modules2 from "./app/model/vuex/modules/common";
import { Table } from "ant-design-vue";

console.log(Table, "antVueantVue");
Vue.use(Vuex);
new Vuex.Store({
  modules: {
    test: modules2
  }
});
new Vuex.Store({
  modules: {
    test: modules1
  }
});

render(1, router);
