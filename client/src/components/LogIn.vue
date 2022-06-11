<template>
  <div class="page">
    <div class="log-in__container">
      <div class="log-in__item">
        <div class="log-in__title">
          Войти в аккаунт
        </div>
      </div>
     <!-- <form class="log-in__form" @submit.prevent> -->
      <input class="log-in__input" type="email" placeholder="Электронная почта"  @input="email = $event.target.value">
      <input class="log-in__input" type="password" placeholder="Пароль" @input="password = $event.target.value">
        <div>
          <button @click="SignIn" to="/ProfileScreen" class="log-in__button">Войти</button>
        </div>
          <!-- </form> -->
      </div>
    </div>
</template>

<script>
import {auth} from "@/api/authAPI"
import store from '../store.js'

export default {
   name: 'Login',
   data(){
    return {
      user:{
        email: "",
        password: "",
        id:""
      },
      jwt: '',
      store: store
    }
  },
  methods: {
    SignIn() {
    let jwt = ''
    let user={}
     auth(this.email,this.password).then((response)=>{
        return response.data
      }).then(data => {
        return jwt = { ...data }
      }).then(() => {
        console.log(jwt)
      }).then(() => {
        this.jwt = jwt
        this.user.id=user.id
        localStorage.setItem("userId", user.id);
        console.log(localStorage.getItem('userId'))
        localStorage.setItem("SavedToken", jwt);
        console.log(localStorage.getItem('SavedToken'))
      }).then(() => {
      if(jwt){
          window.location.href = 'http://localhost:8080/#/EditProfileScreen';
       } localStorage.setItem("SavedToken", jwt);
        console.log(localStorage.getItem('SavedToken'))
       // zwindow.location.reload();
      })
    }
  }
} 
</script>

<style lang="less" scoped>
@import "../utils/mixins.less";
@import "../utils/const.less";

.page {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Roboto;
}
.log-in {
  &__form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  &__container{
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  .shadow();
  width: 30%;
  height: 250px;
  }
  &__item {
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  }
  &__title{
  font-size: 1.5em; 
  margin-bottom: 8px; 
  }
  &__input {
  margin-bottom: 8px;
  width: 200px;
  border-radius: 5px;
  border: none;
  outline: none;
  background-color: @utility-border-input;
  height: 25px;
  padding: 8px;
  }
  &__button{
  margin: 15px 0 8px;
  background-color: @header-background;
  color: white;
  padding: 5px;
  border-radius: 8px; 
  box-shadow: none;
  border: none;
  }
}
.password {
  margin-bottom: 8px;
}
.email {
  margin-bottom: 8px;
}
</style>