import { createStore } from 'vuex'

export default createStore({
  state: {
    patientsData:[]
  },
  getters: {
    getPatientData: function(state){
      return state.patientsData
    }
  },
  mutations: {
    setPatientsData: function(state , data){
      state.patientsData = data;
    }
  },
  actions: {
    setPatientsData : function({commit} , data){
      commit("setPatientsData" , data)
    }
  },
  modules: {
  }
})
