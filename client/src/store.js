import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)


export default new Vuex.Store({
  state(){
    return{
      lang: 'EN',
      user: {
        name: '',
        surname: '',
        patronymic: '',
        email: '',
        password: '',
        educationPlace: '',
        educationKey: '',
        placeOfWork: '',
        workPosition: '',
        academicDegree: ''
      },
      author: {
        id:"",
        name: "",
        surname: "",
        patronymic: "",
        city: "",
        adress: "",
        posteCode: "",
        education: "",
        specialtyCode: "",
        work: "",
        position: "",
        academicDegree: ""
      },
      jwt: ''
    }
  },
  mutations: {
     set(state, data) {
       Object.assign(state, data)
     },
     update(state, data) {
       state = { ...state, ...data }
     }
  },
  actions:{

  },
  getters:{

  },
})

