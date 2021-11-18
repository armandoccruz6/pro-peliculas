import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pelis:[],
    
  },
  mutations: {
    SET_PELIS(state, pelis){
      state.pelis = pelis;
    },
   
    
  },
  actions: {
    

    getPelis({commit} , {palabra}){
      //palabra = "hello"

      axios.get(`https://www.omdbapi.com/?apikey=931e5412&s=${palabra}`)
      //axios.get(`https://www.omdbapi.com/?apikey=931e5412&s=wonder`) 
      .then(response => {
        commit('SET_PELIS', response.data.Search);
      })
      .catch(error => console.log(error))
      
    },

    
  },
  modules: {
  }
})
