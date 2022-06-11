<template>
<div>
  <div v-if="lang === 'EN'" class="page">
    <div class="container">
      <h2 class="title">Журнал</h2>
      <h3 class="subtitle">"Проблемы информатики"</h3>
        <div class="row-container">
          <div class="cover">
                <img src="../assets/img/cover.png">
          </div>
            <div class="about-magazine">
              <div class="text-one">
                Издатель журнала "Проблемы информатики" ­-&nbsp; Федеральное государственное бюджетное учреждение науки
                Институт вычислительной математики и математической геофизики Сибирского отделения Российской академии наук
              </div>
            <p class="about-magazine-text">Ежеквартальный рецензируемый научный журнал "Проблемы информатики" публикует общетеоретические и методические
            статьи по вопросам информатики, информационных технологий и их применения.</p>
            <p class="about-magazine-text">Журнал адресован научным работникам, аспирантам, программистам, инженерам и студентам, интересующимся
            результатами фундаментальных и прикладных исследований в области высоких информационных технологий на базе
            новейших достижений физики, информатики и компьютерной техники. </p>
              <div class="next-button"><router-link to="/aboutmagazine">Читать далее</router-link></div>
            </div>
        </div>
    </div>
    <div class="about-author">
      <div class="about-author__text">
      <h2>Главный редактор</h2>
      <h3>Малышкин Виктор Эммануилович</h3>
      <p>Профессор, заведующий лабораторией Синтеза параллельных программ института вычислительной математики и
        математической геофизики (ИВМиМГ) СО РАН, Новосибирск</p>
      <p>Заведующий кафедрой Параллельных вычислений (по совместительству) факультета Информационных технологий (ФИТ)
        НГУ.
      </p>
      
      <div v-if="showMore" class="accordion-panel">
        <p>Основные научные интересы: параллельные вычислительные технологии, алгоритмы, языки и системы распределенного
          программирования, методы и средства параллельной реализации крупномасштабных численных моделей, технология
          активных знаний.</p>
        <p>Основной академический проект – разработка алгоритмов реализации и системы LUNA автоматического
          конструирования параллельных/распределенных программ численного моделирования.</p>
        <ul type="disc" class="bulleted-list">
          <li>В 1970г. закончил механико-математический факультет Томского госуниверситета.</li>
          <li>В 1986г. защитил ученую степень к.ф.м-н. по специальности 01.01.10., тема «Синтез параллельных программ на
            вычислительных моделях с массивами», ВЦ СО АН СССР, Новосибирск.</li>
          <li>В 1993г. защитил ученую степень д.т.н. по специальности 05.13.11. «Организация вычислений в крупноблочных
            иерархических МВС», НГУ, Новосибирск.</li>
        </ul>
        <div class="p1">128 публикаций по параллельным и распределённым вычислениям, синтезу параллельных и
          распределенных программ, суперкомпьютерному программному обеспечению и приложениям, параллельной реализации
          крупномасштабных численных моделей.
          Председатель программного комитета серии международных конференций PaCT (Parallel Computing Technologies),
          проводимых каждый нечётный год в России. В 2017г прошла 14-я конференция. Труды конференций публикуются
          отдельным томом в LNCS (Springer). Каждый четный год выпускаются спец. выпуски одного из международных
          журналов.
        </div>
      </div>
    </div>
     <img src="../assets/img/autor.png">
    </div>
    <div class="headings__container">
      <h1>К публикации в журнале принимаются работы студентов, магистрантов, аспирантов, докторантов, научных сотрудников, занимающихся исследованиями по следующим научным направлениям:</h1>
      <h2>Рубрики по направлениям:</h2>
        <div class="headings">
          <div class="headings__item">1. Теоретическая и системная информатика.</div>
          <div class="headings__item">2. Прикладные информационные технологии.</div>
          <div class="headings__item">3. Суперкомпьютерное моделирование.</div>
        </div>
        <div class="headings">
          <div class="headings__item">4. Параллельное системное программирование и вычислительные технологии.</div>
          <div class="headings__item">5. Информатика безопасных систем.</div>
          <div class="headings__item">6. Листая старые страницы.</div>
        </div>
    </div>
    <div class="rules">
      <h2>Правила приема, рецензирования и опубликования научных статей</h2>
      <h3>Все статьи, присланные в редакцию, получают экспертную оценку редакционной коллегии журнала, на основе которой принимается решение о возможности публикации.</h3>
      <h3>В разделе <a href="#">Авторам</a> представлены общие требования  приема, рецензирования  и опубликования научных статей.
Вопросы по публикации статей,  осуществляются по электронной почте через ответственного секретаря журнала.</h3>
    </div>
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
    <div class="footer">
    <h1>УВАЖАЕМЫЕ ПОСЕТИТЕЛИ САЙТА ЖУРНАЛА "ПРОБЛЕМЫ ИНФОРМАТИКИ"!</h1>
    <p>Если Вы обнаружили ошибку, сообщите, пожалуйста, по e-mail: problem-info@sscc.ru  c пометкой "ошибка на сайте" и указанием, где допущена ошибка.</p>
    <p>Заранее благодарны. Редакция журнала.</p>
    </div>
  </div>

  <div v-if="lang === 'RU'" class="page">
    <div class="container">
      <h2 class="title">Magazine</h2>
      <h3 class="subtitle" style="margin-left: -8px">"Informatics problems"</h3>
        <div class="row-container">
          <div class="cover">
                <img src="../assets/img/cover.png">
          </div>
            <div class="about-magazine">
              <div class="text-one">
                Publisher of the journal "Problems of Informatics" -&nbsp; Federal State Budgetary Institution of Science
                Institute of Computational Mathematics and Mathematical Geophysics, Siberian Branch of the Russian Academy of Sciences
              </div>
            <p class="about-magazine-text">The quarterly peer-reviewed scientific journal "Problems of Informatics" publishes general theoretical and methodological
            articles on computer science, information technology and their applications.</p>
            <p class="about-magazine-text">The magazine is addressed to researchers, graduate students, programmers, engineers and students interested in
            the results of fundamental and applied research in the field of high information technologies based on
            the latest achievements of physics, informatics and computer technology. </p>
              <div class="next-button"><router-link to="/aboutmagazine">Read More</router-link></div>
            </div>
        </div>
    </div>
    <div class="about-author">
      <div class="about-author__text">
      <h2>Chief Editor</h2>
      <h3>Viktor Emmanuilovich Malyshkin</h3>
      <p>Professor, Head of the Laboratory of Synthesis of Parallel Programs of the Institute of Computational Mathematics and
        of Mathematical Geophysics (IMMG) SB RAS, Novosibirsk</p>
      <p>Head of the Department of Parallel Computing (part-time) of the Faculty of Information Technology (FIT)
        NSU.
      </p>
      
      <div v-if="showMore" class="accordion-panel">
        <p>Main scientific interests: parallel computing technologies, algorithms, languages and systems of distributed
          programming, methods and means of parallel implementation of large-scale numerical models, technology
          active knowledge.</p>
        <p>The main academic project is the development of implementation algorithms and the LUNA system for automatic
          designing parallel/distributed numerical simulation programs.</p>
        <ul type="disc" class="bulleted-list">
          <li>In 1970. Graduated from the Faculty of Mechanics and Mathematics of Tomsk State University.</li>
          <li>In 1986. defended the degree of Ph.D. specialty 01.01.10., topic "Synthesis of parallel programs on
            Computational Models with Arrays”, Computing Center of the Siberian Branch of the USSR Academy of Sciences, Novosibirsk.</li>
          <li>In 1993. defended the degree of Doctor of Technical Sciences. by specialty 05.13.11. "Organization of calculations in large-block
            hierarchical MVS”, Novosibirsk State University, Novosibirsk.</li>
        </ul>
        <div class="p1">128 publications on parallel and distributed computing, synthesis of parallel and
          distributed programs, supercomputer software and applications, parallel implementation
          large scale numerical models.
          Chairman of the program committee of the series of international conferences PaCT (Parallel Computing Technologies),
          held every odd year in Russia. The 14th conference took place in 2017. Conference Proceedings are published
          separate volume in LNCS (Springer). Specials are released every even year. editions of one of the international
          magazines.
        </div>
      </div>
    </div>
     <img src="../assets/img/autor.png">
    </div>
    <div class="headings__container">
      <h1>The papers of students, undergraduates, graduate students, doctoral students, researchers engaged in research in the following scientific areas are accepted for publication in the journal:</h1>
      <h2>Headings by areas:</h2>
        <div class="headings">
          <div class="headings__item">1. Theoretical and systems informatics.</div>
          <div class="headings__item">2. Applied information technologies.</div>
          <div class="headings__item">3. Supercomputer simulation.</div>
        </div>
        <div class="headings">
          <div class="headings__item">4. Parallel system programming and computing technologies.</div>
          <div class="headings__item">5. Computer Science of Secure Systems.</div>
          <div class="headings__item">6. Flipping through old pages.</div>
        </div>
    </div>
    <div class="rules">
      <h2>Rules for accepting, reviewing and publishing scientific articles</h2>
      <h3>All articles sent to the editorial office receive an expert assessment by the editorial board of the journal, on the basis of which a decision is made on the possibility of publication.</h3>
      <h3>The <a href="#">To Authors</a> section presents the general requirements for accepting, reviewing and publishing scientific articles.
Questions about the publication of articles are carried out by e-mail through the executive secretary of the journal.</h3>
    </div>
    <div class="contacts">
      <div class="map">
        <a href="https://yandex.ru/maps/65/novosibirsk/house/prospekt_akademika_lavrentyeva_6/bEoYdwdiTU0FQFtufXR0cH9lZA==/?ll=83.103425%2C54.848880&utm_medium=mapframe&utm_source=maps&z=16.35" style=" font-size:12px;position:absolute;top:14px;"></a>
        <iframe src="https://yandex.ru/map-widget/v1/-/CCUynEun~D" width="900vh" height="300" frameborder="1" allowfullscreen="true" style="position: relative;"></iframe>
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
    <div class="footer">
    <h1>DEAR VISITORS OF THE SITE OF THE JOURNAL "PROBLEMS OF INFORMATICS"!</h1>
    <p>If you find an error, please report it by e-mail: problem-info@sscc.ru marked "error on the site" and indicating where the error was made.</p>
    <p>Thanks in advance. Editorial staff.</p>
    </div>
  </div>
</div>
</template>

<script>
import Authorization from './Authorization.vue'

export default {
  name: 'HomeScreen',
  component: {
    Authorization
  },
  props: {
    msg: String
  },
  data() {
    return {
      showMore: false,
    };
  },
  methods: {
    toggleShowMore() {
      this.showMore = !this.showMore;
    }
  },
 computed: {
      lang() {
          return this.$store.state.lang
      }
 }
}
</script>

<style lang="less" scoped>
body {
    font-family: Helvetica, Arial, "Bitstream Vera Sans", sans-serif;
    font-size: 100%;
    margin: 0;
    background-color: #F5F5F5;
}
.footer{
  background-color: rgb(0,0,0, 0.7);
  opacity: 0.7;
  width: 100%;
  padding: 30px;
  margin-left: 40px;
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
.map {
  position:relative;
  overflow:hidden;
}
.page {
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #D7D7D7;
  overflow-x: hidden;
}
.about-magazine-text{
  color: white;
}
.text-one {
    font-size: 1.1em;
    padding: 0 0 30px;
    font-family: Verdana;
    color: white;
}
.about-magazine h2{
  font-family: Roboto;
  font-size:1.5em;
}
.img-it {
    height: 144px;
    width: 100%;
    margin-bottom: 20px;
    object-fit: cover;
}
.row-container{
  font-family: Roboto-Italic;
  display: flex;
  align-items: center;
}
.about-magazine{
    background:#1287A8;
    max-width: 600px;
    margin-right: 15px;
    padding: 15px;
    margin-top: 30px;
    font-size: 1em;
}
.container {
  display: flex;
  width: 90%;
  flex-direction: column;
  align-items: center;
  
}
.title{
  text-align: center;
  font-family: Verdana;
  margin-right: 270px;
  margin-top: 20px;
  font-size: 1.3em;
}
.subtitle{
  text-align: center;
  font-family: Verdana;
  font-weight: bold;
  font-size: 1.7em;
  margin-left: 70px;
  margin-bottom: -20px;
}
.next-button{
    width: 90px;
    text-align: center;
    margin-left: auto;
    color: #0084BC;
    background-color: white;
    padding: 5px;
    border-radius: 5px;
    margin-top: 10px;
    & a {
      color: #0084BC;
      text-decoration: none;
      font-weight: bold;
      color: inherit;
      font-size: 0.8em;
    }
    &:hover {
      color: black;
      background-color: #D7D7D7;
    }
}
.cover img{
    height: 300px;
    width: 210px;
    margin-right: 85px;
    margin-top: 20px;
}
.about-author {
    background-color: #EEEEEE;
    display: flex;
    align-items: center;
    margin-top: 30px;
    & img {
      width: 400px;
      height: 350px;
      margin: 50px;
    }
    & h2 {
      margin: 15px 15px;
      font-size: 2em;
      text-align: center;
    }
    & h3 {
      margin: 30px 15px;
      font-size: 1.5em;
      text-align: center;
      font-family: Roboto-Bold;
    }
    & p {
      margin: 30px 30px;
      font-family: Verdana;
    }
    &__text {
      font-family: Verdana;
    }
}
.p1 {
    font-size: 0.9em;
    margin: 15px 15px;
    font-family: Verdana;
}
.accordion-button {
    margin: 45px 0 0 340px;;
    border-radius: 5px;
    background:#1287A8;
    padding: 7px;
    width: fit-content;
    & a {
      color: white;
      text-decoration: none;
      font-family: Geneva;
      font-weight: bold;
      text-align: center;
      cursor: pointer;
    }
}
.accordion-panel {
    display: block;
}

.hidden {
    display: none;
}
.headings{
  display: flex;
  justify-content: space-between;
  overflow-x: hidden;
  &__container {
    overflow-x: hidden;
    text-align: center;
    padding: 20px;
    & h1 {
      font-family: Roboto;
      font-size: 1.5em;
    }
    & h2 {
      margin: 20px 0;
      font-family: Roboto-Bold;
    }
  }
  &__item {
    background:#1287A8;
    color: white;
    width: 300px;
    border-radius: 10px;
    margin: 20px;
    text-align: center;
    padding: 5px;
    min-height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.05em;
    flex-direction: column;
    &:hover {
      cursor: pointer;
    }
  }
}
.hiden-items{
  margin: 20px;
  text-align: left;
}
.hiden-items p{
  padding: 5px 0;
}
.rules{
  background: white;
  text-align: center;
  width: 100%;
  padding: 40px;
  font-family: Roboto;
  font-size: 1.5em;
}
.rules h3{
   padding: 20px 20px 0 20px;
  font-family: Roboto;
  font-size: 0.8em;
  text-align: left;
}
.rules h3 a{
  text-decoration:none;
  font-weight: bold;
  color: black;
}
.contacts{
  margin: 20px;
  display: flex;
  padding: 5px;
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
</style>
