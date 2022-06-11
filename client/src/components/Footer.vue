<template>
  <div v-if="lang === 'EN'">
    <div class="footer">
      <h1>УВАЖАЕМЫЕ ПОСЕТИТЕЛИ САЙТА ЖУРНАЛА "ПРОБЛЕМЫ ИНФОРМАТИКИ"!</h1>
      <p>Если Вы обнаружили ошибку, сообщите, пожалуйста, по e-mail: problem-info@sscc.ru  c пометкой "ошибка на сайте" и указанием, где допущена ошибка.</p>
      <p>Заранее благодарны. Редакция журнала.</p>
    </div>
    <div v-if="lang === 'RU'" class="footer">
      <h1>DEAR VISITORS OF THE SITE OF THE JOURNAL "PROBLEMS OF INFORMATICS"!</h1>
      <p>If you find an error, please report it by e-mail: problem-info@sscc.ru marked "error on the site" and indicating where the error was made.</p>
      <p>Thanks in advance. Editorial staff.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
      lang() {
          return this.$store.state.lang
      }
  }
}
</script>

<style lang="less" scoped>

.footer{
  background-color: rgb(0,0,0, 0.7);
  opacity: 0.7;
  width: 100%;
  padding: 30px;
  overflow-x: hidden;
  position: relative;
  bottom: 0;
  & h1 {
    color: white;
    font-family: Roboto;
  }
  & p {
    color: white;
    font-family: Roboto;
    margin-top: 10px;
  }
}
</style>

