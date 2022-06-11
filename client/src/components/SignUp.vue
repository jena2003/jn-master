<template>
  <div class="sign-up">
    <div class="sign-up__container">
      <div class="sign-up__title">Зарегистрироваться</div>
      <div class="sign-up__subtitle">Заполните форму регистрации:</div>
      <form class="sign-up__form" @submit.prevent>
        <input v-bind:value="name" @input="name = $event.target.value" type="text" name="name" class="sign-up__input" placeholder="Имя"/>
        <input v-bind:value="surname" @input="surname = $event.target.value"  type="text" name="surname" class="sign-up__input" placeholder="Фамилия"/>
        <input v-bind:value="email" @input="email = $event.target.value" type="text" name="email" class="sign-up__input" placeholder="Электронная почта"/>
        <input v-bind:value="password" @input="password = $event.target.value"  type="password" name="password" class="sign-up__input" placeholder="Пароль"/>
        <button @click="createUser" class="sign-up__button">Зарегистрироваться</button>
      </form>
    </div>
  </div>
</template>

<script>
import {addUser} from "@/api/userAPI";
import store from '../store.js'

export default {
  name: 'SignUp',
  data(){
    return{
      user:{
        name:"",
        surname:"",
        email:"",
        password:"",
        id: ""
      },
      store: store
    }
  },
  methods:{
    createUser(){
      let user = {}
      addUser(this.name,this.surname,this.email,this.password).then((response) =>{
        return response.data
      }).then(data => {
        return user = { ...data }
      }).then(() => {
        console.log(user)
      }).then(() => {
        this.user.name = user.name
        this.user.surname = user.surname
        this.user.email = user.email
        this.user.password = user.password
        this.user.id = user.id
      localStorage.setItem("userId", user.id);
       console.log(localStorage.getItem('userId'))
      })
      if (user){
        window.location.href = 'http://localhost:8080/#/LogIn';
        this.store.commit('set', {
        user: this.user
      })
       localStorage.setItem("userId", user.id);
       console.log(store.state.user)
       console.log(localStorage.getItem('userId'))
      }
    }

}}
</script>

<style lang="less" scoped>
@import '../utils/const.less';
@import '../utils/mixins.less';

.sign-up {
  display: flex;
  justify-content: center;
  &__form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  &__container {
  display: flex;
  flex-direction: column;
  width: 40%;
  background-color: @utility-white;
  margin-top: 100px;
  .shadow();
  font-family: Roboto;
  padding: 16px;
  }
  &__title {
    font-size: 1.5em;
    padding: 0 0 16px;
    text-align: center;
  }
  &__subtitle {
    font-size: 1.1em;
    margin: 8px 0;
    text-align: center;
  }
  &__radio {
    margin: 24px 0 16px 16px;
    display: flex;
    justify-content: space-between;
    width: 90%;

  }
  &__input {
    width: 40%;
    text-align: center;
    margin: 16px 0 0;
    border: none;
    outline: none;
    background-color: @utility-border-input;
    height: 25px;
    padding: 8px;
    border-radius: 8px;
  }
  &__button {
    margin: 15px 0 8px;
    background-color: @header-background;
    color: white;
    padding: 8px;
    border-radius: 8px; 
    box-shadow: none;
    border: none;
    width: fit-content;
    display: flex;
    align-self: center;
  }
}
.label {
  margin-left: 4px;
}
</style>