<template>
  <div class="container">
    <div class="authorization">
      <div class="log-in">
        <div class="log-in__title">
          <router-link class="sign-up__title" to="/LogIn">Войти</router-link>
        </div>
      </div>
      <div class="sign-up">
        <div class="sign-up__title">
          <router-link class="sign-up__title" to="/SignUp">Зарегистрироваться</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Authorization',
  data() {
    return{
    onHover: false
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  display: flex;
  justify-content: flex-end;
}
.authorization {
  position: sticky;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(1, 68, 97,0.8);
  color: white;
  margin-top: 4px;
  width: fit-content;
  cursor: pointer;
}
.sign-up {
  &__title {
    padding: 10px;
    color: inherit;
    text-decoration: none;
    font-family: Helvetica;
    font-weight: bold;
    font-size: 15px;
    line-height: 21px;
  }
  &:hover {
    background-color: rgba(1, 68, 97,0.9);
  }
}
.log-in{
  width: 100%;
  text-align: center;
  &__title {
    padding: 10px;
    color: white;
  }
  &:hover {
    background-color: rgba(1, 68, 97,0.9);
  }
}
</style>