const isLocal = process.env.VUE_ENV === "client";
const base = {
  root: "",
  user_info_get: {
    url: "permission/authentication/qualify/basic/info"
  }
};
const mock = isLocal
  ? {
      // user_info_get: 'https://dev.dui.ai/permission/authentication/qualify/basic/info'
    }
  : {};

Object.keys(mock).forEach(key => {
  if (base[key]) {
    base[key].url = mock[key];
  }
});

export default base;
