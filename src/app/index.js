import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import { recursion, numLoop } from "./util";
import App from "./view";
import "./assets/font/iconfont/iconfont.css";
import "./assets/style";

var array = [
  { id: "0", parentId: null },
  { id: "1", parentId: "0" },
  { id: "2", parentId: "0" },
  { id: "3", parentId: "1" },
  { id: "4", parentId: "3" },
  { id: "5", parentId: "4" }
];
const tree = new recursion(array);
const num = new numLoop();
console.log("numLoop的实例：" + num, "recursion的实例：" + tree);
console.log(num.loopFilter());
console.log("recursion类：" + recursion);
console.log("recursion类的原型：" + recursion.prototype);

function t(a, b, c) {
  console.log(...arguments, "arguments");
  arguments[1] = 5;
  console.log(b);
  console.log(fn);
  function fn() {}
}
t(1, 2, 3);

Vue.use(ElementUI);
function render(store, router) {
  const vue = new Vue({
    el: "#app",
    // store: store,
    router: router,
    render: h => h(App)
  });
}

export { render };
