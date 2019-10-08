import api from "../../model/api";
import Methods, { axios } from "./convert.js";

const decorator = function() {
  let ret = Object.keys(api).reduce(function(pend, key) {
    pend[key] = convert(api[key], key);

    return pend;
  }, {});
  return ret;
};
function convert(sub, moduleKey) {
  return Object.keys(sub).reduce(function(ctx, key) {
    ctx[key] = new Methods(sub[key], moduleKey, key);
    return ctx;
  }, {});
}
export { axios };
export default decorator;
