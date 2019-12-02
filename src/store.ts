import Vue from 'vue';
import Vuex from 'vuex';
import user from "./store/user/user.store";
import common from "./store/common/common.store";

Vue.use(Vuex);

export default new Vuex.Store({
  modules:{
    user,
    common
  }
});
