import service from "./app/service";
import store from "./app/model/vuex";
import router from "./app/router";
// service.common.get('user_info_get')

import { render } from "./app";

// console.log(service,render)
render(store, router);
