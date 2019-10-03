import Vue from 'vue';
import Vuex from 'vuex';
import {testApiGet, testApiPut, testApiPost, testApiDelete} from '../axios/api';

Vue.use(Vuex);

const state = {
    getData: {},
    putData: {},
    postData: {},
    deleteData: {}
};

const mutations = {
    setGetData(state, data) {
        state.getData = data;
    },

    setPutData(state, data) {
        state.putData = data;
    },

    setPostData(state, data) {
        state.postData = data;
    },

    setDeleteData(state, data) {
        state.deleteData = data;
    }
};

const actions = {
    async testApiGetRequest({commit}) {
        let response = await testApiGet();
        commit('setGetData', response);
    },

    async testApiPutRequest({commit}, data) {
        let response = await testApiPut(data);
        commit('setPutData', response)
    },

    async testApiPostRequest({commit}, data) {
        let response = await testApiPost(data);
        commit('setPostData', response)
    },

    async testApiDeleteRequest({commit}, data) {
        let response = await testApiDelete(data);
        commit('setDeleteData', response)
    }
};

const getters = {
    getResponseData: state => {
        return state.getData;
    },

    putResponseData: state => {
        return state.putData;
    },

    postResponseData: state => {
        return state.postData;
    },

    deleteResponseData: state => {
        return state.deleteData;
    }
};

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
})
