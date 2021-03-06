import * as types from '../mutation-types';

const state = {
  tagData: {},
};

const getters = {};

const actions = {};

const mutations = {
  [types.CURRENT_TAG](state, tagData) {
    state.tagData = tagData;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
