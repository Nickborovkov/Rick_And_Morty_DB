import Vue from 'vue'
import Vuex from 'vuex'
import charaters from "./charaters";
import episode from "./episode";
import locations from "./locations";
import common from "./common";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    common,
    charaters,
    locations,
    episode,
  }
})
