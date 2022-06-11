<template>
  <div id="app">
  <div class="header">
      <nav class="navigation">
      <router-link class="navigation__item_text"  to="/"><img src="../assets/img/banner.png" class="header__logo"></router-link>
        <ul class="navigation__list">
          <li class="navigation__item" id="aboutm">
            <router-link v-if="lang==='EN'" class="navigation__item_text" to="/aboutMagazine">О журнале</router-link>
            <router-link v-if="lang==='RU'" class="navigation__item_text" to="/aboutMagazine">About magazinee</router-link>
          </li>
          <li class="navigation__item">
            <router-link v-if="lang==='EN'" class="navigation__item_text" to="/archive">Архив</router-link>
            <router-link v-if="lang==='RU'" class="navigation__item_text" to="/archive">Archive</router-link>
          </li>
          <li class="navigation__item">
            <router-link v-if="lang==='EN'" class="navigation__item_text" to="/forAutors">Авторам</router-link>
            <router-link v-if="lang==='RU'" class="navigation__item_text" to="/forAutors">For authors</router-link>
          </li>
          <li class="navigation__item">
            <router-link v-if="lang==='EN'" class="navigation__item_text" to="/contacts">Контакты</router-link>
            <router-link v-if="lang==='RU'" class="navigation__item_text" to="/contacts">Contacts</router-link>
          </li>
          <li class="navigation__item navigation__item_text" 
            @click="changeLangItem"
            v-text="lang">
          </li>
          <li v-if="!isLogedIn" class="user-logo" @mouseover="flag=true">
          <ProfileIcon />
          </li>
          <li v-if="isLogedIn" class="user-logo" @mouseover="flag=true">
          <router-link class="navigation__item_text" to="/MyProfileScreen">
            <img class="loged-in-user" src="../assets/img/default-user.jpg">
          </router-link>
          </li>
        </ul>
      </nav>
      <div v-if="!isLogedIn" @mouseleave="toggleFlag"><Authorization v-if="flag"/></div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import ProfileIcon from '../components/ProfileIcon.vue'
import Authorization from '../components/Authorization.vue'
import store from '../store.js'

export default {
  name: 'App',
  components: {
    ProfileIcon,
    Authorization
  },
  data() {
    return {
      flag: false,
      lang: 'EN',
      store: store,
      isLogedIn: localStorage.getItem('SavedToken')
    }
  },
  methods: {
      toggleFlag() {
      this.flag = !this.flag;
    },
      changeLangItem(){
        if (this.lang === 'EN'){
          this.lang = 'RU' 
        } 
        else {
          this.lang = 'EN'
        }
        this.store.commit('set', {
        lang: this.lang
      })
    }
  }
}
document.title = 'Проблемы информатики'
</script>

<style lang="less" scoped>
@import '../utils/const.less';
@import '../utils/mixins.less';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
  overflow-x: hidden;
}
body {
    font-family: Helvetica, Arial, "Bitstream Vera Sans", sans-serif;
    font-size: 100%;
    margin: 0;
    padding: 0;
    background-color: #F5F5F5;
    height: 100vh;
    overflow: auto;
}
.header {
    width: 100%;
    position: sticky;
    top: 0;
    background-color: rgba(1, 68, 97,0.8);
    height: 60px;
    &__logo{
      margin: 0 0 0 15px;
      max-height: 40px;
    }
}
.navigation {
    display: flex;
    box-shadow: inset;
    user-select: none;
    &__list{
      list-style: none;
      display: flex;
      margin-left: auto;
      padding: 5px 0;
      margin-top: 5px;
    }
    &__item {
      margin: 5px 15px;
      padding: 3px 5px;
      color: white;
      &:hover {
        color: white;
        background-color: rgba(1, 68, 97,0.9);
      }
      &_text {
        color: inherit;
      text-decoration: none;
      font-family: Helvetica;
      font-weight: bold;
      font-size: 15px;
      line-height: 21px;
      padding: 5px;
      cursor: pointer;
      }
    }
}
.loged-in-user {
  .icon(32px, 32px);
  cursor: pointer;
  border-radius: 16px;
}
.user-logo{
  margin: 5px 30px 0 10px;
  &:hover {
    cursor: pointer;
  }
}
</style>
