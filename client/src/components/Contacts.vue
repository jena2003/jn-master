<template>
<div>
    <div v-if="lang === 'EN'" class="contacts_page">
    <div class="contacts_background">
        <div class="contacts">
      <div class="map">
        <a href="https://yandex.ru/maps/65/novosibirsk/house/prospekt_akademika_lavrentyeva_6/bEoYdwdiTU0FQFtufXR0cH9lZA==/?ll=83.103425%2C54.848880&utm_medium=mapframe&utm_source=maps&z=16.35" style="color:#eee;font-size:12px;position:absolute;top:14px;"></a>
        <iframe src="https://yandex.ru/map-widget/v1/-/CCUynEun~D" width="900vh" height="300" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>
      </div>
      <div class="contacts__text">
      <h2>Контакты</h2>
      <h3>Ответственный секретарь:</h3>
      <p> Маргарита Сергеевна Делидович;</p>
      <h3>Телефон редакции:</h3>
      <p>(383) 330-9643;</p>
      <h3>e-mail:</h3>
      <p>problem-info@sscc.ru</p>
      <h3>Адрес:</h3>
      <p> проспект Лаврентьева 6, Новосибирск, 630090, Россия</p>
      </div>
      </div>
    </div>
    <div class="footer">
    <h1>УВАЖАЕМЫЕ ПОСЕТИТЕЛИ САЙТА ЖУРНАЛА "ПРОБЛЕМЫ ИНФОРМАТИКИ"!</h1>
    <p>Если Вы обнаружили ошибку, сообщите, пожалуйста, по e-mail: problem-info@sscc.ru  c пометкой "ошибка на сайте" и указанием, где допущена ошибка.</p>
    <p>Заранее благодарны. Редакция журнала.</p>
    </div>
    </div>
    <div v-if="lang === 'RU'" class="contacts_page">
    <div class="contacts_background">
        <div class="contacts">
      <div class="map">
        <a href="https://yandex.ru/maps/65/novosibirsk/house/prospekt_akademika_lavrentyeva_6/bEoYdwdiTU0FQFtufXR0cH9lZA==/?ll=83.103425%2C54.848880&utm_medium=mapframe&utm_source=maps&z=16.35" style="color:#eee;font-size:12px;position:absolute;top:14px;"></a>
        <iframe src="https://yandex.ru/map-widget/v1/-/CCUynEun~D" width="900vh" height="300" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>
      </div>
      <div class="contacts__text">
      <h2>Contacts</h2>
       <h3>Responsible secretary:</h3>
       <p> Margarita Sergeevna Delidovich;</p>
       <h3>Editorial phone:</h3>
       <p>(383) 330-9643;</p>
       <h3>email:</h3>
       <p>problem-info@sscc.ru</p>
       <h3>Address:</h3>
       <p> Lavrentiev Avenue 6, Novosibirsk, 630090, Russia</p>
       </div>
       </div>
     </div>
     <div class="footer">
     <h1>DEAR VISITORS OF THE SITE OF THE JOURNAL "PROBLEMS OF INFORMATICS"!</h1>
     <p>If you find an error, please report it by e-mail: problem-info@sscc.ru marked "error on the site" and indicating where the error was made.</p>
     <p>Thanks in advance. Editorial staff.</p>
     </div>
    </div>
    </div>
</template>

<script>
export default {
  name: 'Contacts',
  computed: {
      lang() {
          return this.$store.state.lang
      }
  }
}
document.title = 'Контакты';
</script>

<style lang="less" scoped>

.contacts{
  margin: 0 20px 0;
  display: flex;
  padding: 5px;
  &_page {
    overflow:hidden;
  }
  &_background {
    background-color: #D7D7D7;
    padding: 20px 0;
  }
  &__text {
    & h2 {
      font-family: Roboto;
      font-weight: bold;
      margin-left: 150px;
      font-size: 1.5em;
      margin-top: -5px;
    }
    & h3 {
      font-size: 1.1em;
      margin-left: 30px;
      margin-top: 30px;
      font-weight: bold;
    }
    & p {
      margin-left: 30px;
      margin-top: 5px; 
    }
  }
}
.map {
  position:relative;
  overflow:hidden;
}
.footer{
  background-color: rgb(0,0,0, 0.7);
  opacity: 0.7;
  width: 100%;
  padding: 30px;
  position: absolute;
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