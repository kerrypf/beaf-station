<template>
  <div>
    <!-- <div>导航</div> -->
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
let asd = {
  wnda: 123
};
asd = {
  ...asd,
  qd: 234
};
console.log(asd);
export default {
  created() {
    // Vue.use(Vuex)
    // new Vuex.Store({
    //     modules:{
    //         test:modules
    //     }
    // })
  }
};
</script>
