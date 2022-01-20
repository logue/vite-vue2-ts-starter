/** Vuex Store */
import Vue from 'vue';
import Vuex, {
  ActionContext,
  ActionTree,
  GetterTree,
  MutationTree,
  StoreOptions,
} from 'vuex';

Vue.use(Vuex);

// TODO: State Interface
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RootState {
  /*
  exampleData: any | null;
  */
}

/** State */
const state: RootState = {
  /*
  exampleData: null,
  */
};

/** Getters */
const getters: GetterTree<RootState, RootState> = {
  /*
  exampleGetter: s => s.exampleData,
  */
};

/** Mutation */
const mutations: MutationTree<RootState> = {
  /*
  exampleMutation(s, payload) {
    s.exampleData = payload;
  },
  */
};

/** Action */
const actions: ActionTree<RootState, RootState> = {
  /**
   * Example Action
   *
   * @param context - Vuex Context
   * @param data - Payload data
   */
  exampleAction(context: ActionContext<RootState, RootState>, data: any) {
    // ...
    context.commit('exampleMutation', data);
  },
};

// VuexStore
const store: StoreOptions<RootState> = {
  // https://next.vuex.vuejs.org/guide/strict.html#development-vs-production
  strict: import.meta.env.DEV,
  state,
  getters,
  mutations,
  actions,
  modules: {
    // SomeModule,
  },
  plugins: [
    /*
    // store as local storage using vuex-persist
    new VuexPersistence({
      key: import.meta.env.VITE_APP_WEBSTORAGE_NAMESPACE,
      storage: window.localStorage,
      modules: ['SomeModule'],
    }).plugin,
    // store as session storage
    new VuexPersistence({
      key: import.meta.env.VITE_APP_WEBSTORAGE_NAMESPACE,
      storage: window.sessionStorage,
      modules: ['SomeModule'],
    }).plugin,
    // store as Indexed DB (using vuex-persist-indexeddb)
    createPersistedState({
      key: import.meta.env.VITE_APP_WEBSTORAGE_NAMESPACE,
      paths: ['SomeLargeModule'],
    }),
    */
  ],
};

export default new Vuex.Store<RootState>(store);
