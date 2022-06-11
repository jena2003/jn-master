<template>
<div>
  <div class="profile">
    <div class="menu">
      <router-link class="menu__item" to="/MyProfileScreen">Мой профиль</router-link>
      <div class="menu__item">Мои статьи</div>
      <div class="menu__item menu__item_checked">Редактировать профиль</div>
      <a href="#openModal" class="menu__item">Выйти из профиля</a>
    </div>
    <div class="profile__container">
      <div class="profile__avatar-and-data">
        <div>
          <img class="profile__avatar" src="../assets/img/default-user.jpg">
          <div class="edit-photo">Изменить аватар</div>
        </div>
        <div class="profile__main-data">
          <input
            v-bind:value="name"
            class="profile__input"
            placeholder="Имя"
            @input="name = $event.target.value"
          />
          <input
            v-bind:value="surname"
            class="profile__input"
            placeholder="Фамилия"
            @input="surname = $event.target.value"
          />
          <input
            v-bind:value="patronymic"
            class="profile__input"
            placeholder="Отчество"
            @input="patronymic = $event.target.value"
          />
        </div>
      </div>
      <div class="profile__subtitle">Образование</div>
      <div class="profile__education">
        <input
          v-bind:value="education"
          class="profile__input profile__input_long"
          placeholder="Наименование учреждения"
          @input="education = $event.target.value"  
        />
         <input
            v-bind:value="specialtyCode"
            class="profile__input profile__input_long"
            placeholder="Код специальности"
            @input="specialtyCode = $event.target.value"
          />
      </div>
      <div class="profile__subtitle">Адрес</div>
      <div class="profile__data">
        <input
          v-bind:value="city"
          class="profile__input profile__input_long"
          placeholder="Город"
          @input="city = $event.target.value"
          />
        <input
          v-bind:value="adress"
          class="profile__input profile__input_long"
          placeholder="Адрес"
          @input="adress = $event.target.value"
        />
        <input
          v-bind:value="posteCode"
          class="profile__input profile__input_long"
          placeholder="Почтовый индекс"
          @input="posteCode = $event.target.value"  
        />
      </div>
      <div class="profile__subtitle">Работа</div>
      <div class="profile__education">
        <input
          v-bind:value="work"
          class="profile__input profile__input_long"
          placeholder="Место работы"
          @input="work = $event.target.value"   
        />
        <input
          v-bind:value="position"
          class="profile__input profile__input_long"
          placeholder="Должность"
          @input="position = $event.target.value" 
        />
        <input
          v-bind:value="academicDegree"
          class="profile__input profile__input_long"
          placeholder="Ученая степень"
          @input="academicDegree = $event.target.value" 
        />
        <button class="profile__button" @click="editUser" >Подтвердить</button>
      </div>
    </div>
  </div>
  <Footer />
  <div class="modal-window"><ModalWindow /></div>
</div>
  
</template>

<script>
import Footer from './Footer.vue'
import {addAuthor} from "@/api/authorAPI"
import ModalWindow from './ModalWindow.vue'
import store from '../store.js'
export default {
  name: 'EditProfileScreen',
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
      },
      store:store
    }
  },
  methods: {
     editUser() {
       let author={}
     addAuthor(
       this.name,
       this.surname,
       this.patronymic,
       this.city,
       this.adress,
       this.posteCode,
       this.education,
       this.specialtyCode,
       this.work,
       this.position,
       this.academicDegree
        ).then((response)=>{
          return response.data
        }).then(data=>{
          return author={...data}
        }).then(()=>{
           this.author.name=author.name
           this.author.surname=author.surname
           this.author.patronymic=author.patronymic
           this.author.city=author.city
           this.author.adress=author.adress
           this.author.posteCode=author.posteCode
           this.author.education=author.education
           this.author.specialtyCode=author.specialtyCode
           this.author.work=author.work
           this.author.position=author.position
           this.author.academicDegree=author.academicDegree
           this.author.id=author.id
           localStorage.setItem("authorId",author.id)
           console.log(localStorage.getItem("authorId"))
           console.log(author)
        })
        if (author){
          window.location.href = 'http://localhost:8080/#/MyProfileScreen';
        }
         localStorage.setItem("authorId",author.id)
           console.log(localStorage.getItem("authorId"))
        }
    },
     
    logOut() {
      alert('Вы уверены, что хотите выйти из профиля?')
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
    flex-direction: column;
    align-items: center;
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
.modal-window {
  position: absolute;
}
</style>

