const isLocal = process.env.VUE_ENV === "client";
const base = {
  user_info_get: {
    url: "http://10.254.10.118:3042/fgm/fm/rule/alarm/board/rule/user/check?userId=wjmboard",
    config: {
      headers: { "X-Requested-With": "XMLHttpRequest" }
    }
  },
  skill_delete: {
    url: "https://www.duiopen.com/skill/delete?skillId={skillId}",
    abort: true
  },
  skill_create: {
    url: "https://www.duiopen.com/skill/create",
    abort: true
  },
  test_status_code: {
    url: "http://localhost:3000/system/list"
  },
  tes2t_status_code: {
    url: "http://localhost:3000/system/list"
  },
  tes3t_status_code: {
    url: "http://localhost:3000/system/list"
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
