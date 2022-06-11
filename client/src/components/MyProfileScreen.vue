<template>
<div>
  <div class="profile">
    <div class="menu">
      <div class="menu__item menu__item_checked">Мой профиль</div>
      <div class="menu__item">Мои статьи</div>
      <router-link class="menu__item" to="/EditProfileScreen">Редактировать профиль</router-link>
      <a href="#openModal" class="menu__item">Выйти из профиля</a>
    </div>
    <div  class="profile__container">
      <div class="profile__avatar-and-data">
        <img class="profile__avatar" src="../assets/img/default-user.jpg">
        <div class="profile__main-data">
          <div class="profile__input">{{ author.name }}</div>
          <div class="profile__input">{{ author.surname }}</div>
          <div class="profile__input">{{ author.patronymic }}</div>
        </div>
      </div>
       <div class="profile__subtitle">Адрес</div>
      <div class="profile__education">
        <div class="profile__input">{{ author.city }}</div>
        <div class="profile__input">{{ author.adress }}</div>
            <div class="profile__input">{{ author.posteCode }}</div>
      </div>
      <div class="profile__subtitle">Образование</div>
      <div class="profile__education">
        <div class="profile__input">{{ author.education }}</div>
        <div class="profile__input">{{ author.specialtyCode }}</div>
      </div>
      <div class="profile__subtitle">Работа</div>
      <div class="profile__education">
        <div class="profile__input">{{ author.work }}</div>
        <div class="profile__input">{{ author.position }}</div>
        <div class="profile__input">{{ author.academicDegree }}</div>
      </div>
    </div>
  </div>
  <ModalWindow />
  <Footer />
</div>
</template>

<script>
import Footer from './Footer.vue'
import ModalWindow from './ModalWindow'
import {getAuthor} from '@/api/authorAPI'
export default {
  name: 'MyEditProfileScreen',
  components: {
    Footer,
    ModalWindow
  },
 
  data: function() {
    return {
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
      }
    }
  },
  methods:{
   Get(){
    getAuthor( ).then((response)=>{
     this.name=response.data
    })
  }
  },
  mounted:function(){
    this.Get()
  }
}
</script>

<style lang="less" scoped>
@import '../utils/const.less';
@import '../utils/mixins.less';

.profile {
  margin: 0 auto;
  display: flex;
  width: 100%;
  background-color: @utility-border;
  &__education {
    display: flex;
    margin-top: 20px;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
  }
  &__subtitle {
    .title-big-bold();
    text-align: center;
    margin-top: 40px;
  }
  &__avatar-and-data {
    display: flex;
  } 
  &__data {
    display: flex;
    margin-top: 16px;
    justify-content: space-between;
  }
  &__avatar {
    width: 200px;
    height: 200px;
    .nice-shadow();
    border-radius: 32px;
  }
  &__container {
    padding: 30px 30px 30px 0;
    display: flex;
    flex-direction: column;
    margin-left: 10%;
  }
  &__input {
      text-align: center;
      margin: 16px 0 0;
      border: none;
      outline: none;
      background-color: @utility-border-input;
      height: 25px;
      padding: 8px;
      border-radius: 8px;
      width: 200px;
      display: flex;
      justify-content: center;
      align-items: center;
      user-select: none;
      .nice-shadow();
      &_long {
        width: 300px;
      }
  }
  &__button {
    text-align: center;
      margin: 32px 0 0;
      border: none;
      outline: none;
      .nice-shadow();
      padding: 8px;
      border-radius: 8px;
      background-color: rgba(1, 68, 97,0.8);
      color: @utility-white;
  }
  &__main-data {
    display: flex;
    flex-direction: column;
    margin-left: 45px;
  }
}

.edit-photo {
  .subtitle-big-bold();
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1), 0px 4px 20px rgba(0, 0, 0, 0.1);
  color: @text-grey;
  cursor: pointer;
  margin-top: 8px;
  margin-left: 48px;
}

.menu {
    width: 200px;
    margin-left: 100px;
    height: 100%;
    display: flex;
    margin-top: 30px;
    background-color: @dark-text-secondary;
    flex-direction: column;
    &__item {
      border: 1px solid @utility-border;
      padding: 8px 8px 14px;
      background-color: rgba(1, 68, 97,0.7);
      color: @utility-white;
      text-decoration: none;
      cursor:pointer;
      &:hover {
        background-color: rgba(1, 68, 97);
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1), 0px 4px 20px rgba(0, 0, 0, 0.1);
      } 
      &_checked {
      background-color: rgba(1, 68, 97);
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1), 0px 4px 20px rgba(0, 0, 0, 0.1);
    }
    }
  }
</style>
