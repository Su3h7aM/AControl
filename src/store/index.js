import Vue from "vue";
import Vuex from "vuex";

// import example from './module-example'
import teste from "./modules";
import pouch from "./pouch";
// import state from "./modules/state";
// import * as actions from "./modules/actions";
Vue.use(Vuex);

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function(/* { ssrContext } */) {
  const Store = new Vuex.Store({
    // state,
    // actions,
    modules: {
      teste,
      pouch
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  });

  return Store;
}
