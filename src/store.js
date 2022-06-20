/* eslint-disable */

import Vue from 'vue'
import Vuex from 'vuex'
import router from './router';

const axios = require('axios');
Vue.use(Vuex)

export default new Vuex.Store({

    state: {
        apiURL: process.env.VUE_APP_API_URL,
        uploadsURL: process.env.VUE_APP_UPLOADS_URL,
        brandName: process.env.VUE_APP_BRAND,
        hello: 'This is hello message from the store',
        accessToken: null,
        loggingIn: false,
        loginError: null
    },

    mutations: {
        loginStart: state => state.loggingIn = true,
        loginStop: (state, errorMessage) => {
            state.loggingIn = false;
            state.loginError = errorMessage;
        },
        updateAccessToken: (state, accessToken) => {
            state.accessToken = accessToken;
        },
        logout: (state) => {
            state.accessToken = null;
        }
    },

    actions: {

        myAction(context, data) {
            return new Promise((resolve, reject) => {
                // Do something here... lets say, a http call using vue-resource
                this.$http("/api/something").then(response => {
                    // http success, call the mutator and change something in state
                    resolve(response); // Let the calling function know that http is done. You may send some data back
                }, error => {
                    // http failed, let the calling function know that action did not work out
                    reject(error);
                })
            })
        },

        doLogin({
            commit
        }, loginData) {
            return new Promise((resolve, reject) => {
                console.log("store - doLogin", loginData)
                commit('loginStart');
                axios.post(this.state.apiURL + '/login', {
                        ...loginData
                    })
                    .then(response => {
                        localStorage.setItem('accessToken', response.data.access_token);
                        if (response.data.user_details) {
                            localStorage.setItem('userDetails', JSON.stringify(response.data.user_details));
                            router.push('/profile');
                        }
                        if (response.data.company_details) {
                            localStorage.setItem('companyDetails', JSON.stringify(response.data.company_details));
                            router.push('/company');
                        }
                        commit('loginStop', null);
                        commit('updateAccessToken', response.data.access_token);
                        //this.$router.push('/tasks');
                        //router.push('/profile');          
                        resolve(response);
                    })
                    .catch(error => {
                        console.log('error', error)
                        commit('loginStop', error);
                        commit('updateAccessToken', null);
                        reject(error)
                    })
            })
        },

        fetchAccessToken({
            commit
        }) {
            commit('updateAccessToken', localStorage.getItem('accessToken'));
        },

        logout({
            commit
        }) {
            axios.delete(this.state.apiURL + '/logout', {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem('accessToken')
                    }
                })
                .then(r => {
                    localStorage.clear()
                    commit('logout');
                    router.push('/');
                })
                .catch(e => {
                    console.error(e.response);
                    localStorage.removeItem('accessToken');
                    commit('logout');
                    router.push('/login/person');
                });
        }
    }
})