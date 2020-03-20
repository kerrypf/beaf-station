import api, { axios } from "./axios";

// import apiConfig from '../model/api'
var core = {
  ...api()
};

axios.setReqConfig = config => {
  // console.log(config,'config')
  return config;
};
axios.handlerResData = data => {
  // console.log(data,'data')
  return data;
};
axios.handlerResErr = errData => {
  // console.log(errData,'errData')
};
export default core;
export {
  axios
 };
