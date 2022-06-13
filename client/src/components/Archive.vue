<template>
<div>
    <div class="archive">
        <div class="archive__page">
          <span class="archive__title">Архив</span>
          <div class="container">
        <div class="large-12 medium-12 small-12 cell">
          <label>File
             <input type="text" id="name" ref="name" v-bind:value="name" @input="name = $event.target.value"/>
            <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
          </label>
         <button v-on:click="submitFile()">Submit</button>
    </div>
  </div>
          <div class="archive__container">
            <span @click=" visible2022 = ! visible2022" class="container__title">2022</span>
            <div v-if=" visible2022" class="container">
              <router-link class="container__href" to="/ReadingPdf">
                <div @click="showPdf" class="container__item">
           {{this.name}}
                </div>
              </router-link>
              <a class="container__href" href="#pdf">
                <div @click="showPdf" class="container__item">
                № 2 (55)
                </div>
              </a>
              <a class="container__href" href="#pdf">
                <div @click="showPdf" class="container__item">
                № 3 (56)
                </div>
              </a>
              <a class="container__href" href="#pdf">
                <div @click="showPdf" class="container__item">
                № 4 (57)
                </div>
              </a>
          </div>
          <span @click=" visible2021 = ! visible2021" class="container__title">2021</span>
            <div v-if=" visible2021" class="container">
              <a class="container__href" href="#pdf">
                <div @click="showPdf" class="container__item">
                № 1(50) электронная версия
                </div>
              </a>
              <a class="container__href" href="#pdf">
                <div @click="showPdf" class="container__item">
                  № 2(51) электронная версия
                </div>
              </a>
              <a class="container__href" href="#pdf">
                <div @click="showPdf" class="container__item">
                  № 3(52) электронная версия
                </div>
              </a>
              <a class="container__href" href="#pdf">
                <div @click="showPdf" class="container__item">
                  № 4(53)
                </div>
              </a>
            </div>
          <span @click=" visible2020 = ! visible2020" class="container__title">2020</span>
          <div v-if=" visible2020" class="container">
              <div @click="showPdf" class="container__item">
                № 1(46) электронная версия
              </div>
              <div @click="showPdf" class="container__item">
                № 2(47) электронная версия
              </div>
              <div @click="showPdf" class="container__item">
                № 3(48) электронная версия
              </div>
              <div @click="showPdf" class="container__item">
                № 4(49) электронная версия
              </div>
          </div>
          <span @click=" visible2019 = ! visible2019" class="container__title">2019</span>
          <div v-if=" visible2019" class="container">
              <div @click="showPdf" class="container__item">
                № 1(42) электронная версия
              </div>
              <div @click="showPdf" class="container__item">
                № 2(43) электронная версия
              </div>
              <div @click="showPdf" class="container__item">
                № 3(44) электронная версия
              </div>
              <div @click="showPdf" class="container__item">
                № 4(45) электронная версия
              </div>
          </div>
          <span @click="visible2018 = !visible2018" class="container__title">2018</span>
          <div v-if="visible2018" class="container">
              <div @click="showPdf" class="container__item">
                № 1 (38) электронная версия
              </div>
              <div @click="showPdf" class="container__item">
                № 2 (39) электронная версия
              </div>
              <div @click="showPdf" class="container__item">
                № 3 (40) электронная версия
              </div>
              <div @click="showPdf" class="container__item">
                № 4 (41) электронная версия
              </div>
          </div>
          <span @click="visible2017 = !visible2017" class="container__title">2017</span>
          <div v-if="visible2017" class="container">
              <div @click="showPdf" class="container__item">
                № 1 (34) электронная версия
              </div>
              <div @click="showPdf" class="container__item">
                № 2 (35) электронная версия
              </div>
              <div @click="showPdf" class="container__item">
                № 3 (36) электронная версия
              </div>
              <div @click="showPdf" class="container__item">
                № 4 (37) электронная версия
              </div>
          </div>
          <span @click="visible2016 = !visible2016" class="container__title">2016</span>
          <div v-if="visible2016" class="container">
              <div @click="showPdf" class="container__item">
                № 1 (30)  электронная версия
              </div>
              <div @click="showPdf" class="container__item">
                № 2 (31)  электронная версия
              </div>
              <div @click="showPdf" class="container__item">
                № 3 (32)  электронная версия
              </div>
              <div @click="showPdf" class="container__item">
                № 4 (33)  электронная версия
              </div>
          </div>
          <span @click="visible2015 = !visible2015" class="container__title">2015</span>
          <div v-if="visible2015" class="container">
              <div @click="showPdf" class="container__item">
                № 1 (26)
              </div>
              <div @click="showPdf" class="container__item">
                № 2 (27)
              </div>
              <div @click="showPdf" class="container__item">
                № 3 (28)
              </div>
              <div @click="showPdf" class="container__item">
                № 4 (29)
              </div>
          </div>
          <span @click="visible2014 = !visible2014" class="container__title">2014</span>
          <div v-if="visible2014" class="container">
              <div @click="showPdf" class="container__item">
                № 1 (22)
              </div>
              <div @click="showPdf" class="container__item">
                № 2 (23)
              </div>
              <div @click="showPdf" class="container__item">
                № 3 (24)
              </div>
              <div @click="showPdf" class="container__item">
                № 4 (25)
              </div>
          </div>
          <span @click="visible2013 = !visible2013" class="container__title">2013</span>
          <div v-if="visible2013" class="container">
              <div @click="showPdf" class="container__item">
                № 1 (18)
              </div>
              <div @click="showPdf" class="container__item">
                № 2 (19)
              </div>
              <div @click="showPdf" class="container__item">
                № 3 (20)
              </div>
              <div @click="showPdf" class="container__item">
                № 4 (21)
              </div>
          </div>
          <span @click="visible2012 = !visible2012" class="container__title">2012</span>
          <div v-if="visible2012" class="container">
              <div @click="showPdf" class="container__item">
                № 1 (13)
              </div>
              <div @click="showPdf" class="container__item">
                № 2 (14)
              </div>
              <div @click="showPdf" class="container__item">
                № 3 (15)
              </div>
              <div @click="showPdf" class="container__item">
                № 4 (16)
              </div>
              <div @click="showPdf" class="container__item">
                Спецвыпуск (17)
              </div>
          </div>
          <span @click="visible2011 = !visible2011" class="container__title">2011</span>
          <div v-if="visible2011" class="container">
              <div @click="showPdf" class="container__item">
                № 1 (9)
              </div>
              <div @click="showPdf" class="container__item">
                № 2 (10)
              </div>
              <div @click="showPdf" class="container__item">
                № 3 (11)
              </div>
              <div @click="showPdf" class="container__item">
                № 4 (12)
              </div>
              <div @click="showPdf" class="container__item">
                Спецвыпуск
              </div>
          </div>
          <span @click="visible2010 = !visible2010" class="container__title">2010</span>
          <div v-if="visible2010" class="container">
              <a class="container__href" href="#pdf">
                <div @click="showPdf" class="container__item">
                № 1 (5)
                </div>
              </a>
              <div @click="showPdf" class="container__item">
                № 2 (6)
              </div>
              <div @click="showPdf" class="container__item">
                № 3 (7)
              </div>
              <div @click="showPdf" class="container__item">
                № 4 (8)
              </div>
          </div>
          <span @click="visible2009 = !visible2009" class="container__title">2009</span>
          <div v-if="visible2009" class="container">
              <div @click="showPdf" class="container__item">
                № 1 (2)
              </div>
              <div @click="showPdf" class="container__item">
                № 2 (3)
              </div>
              <div @click="showPdf" class="container__item">
                № 3 (4)
              </div>
              <div @click="showPdf" class="container__item">
                № 4 Спецвыпуск
              </div>
          </div>
          <span @click="visible2008 = !visible2008" class="container__title">2008</span>
          <div v-if="visible2008" class="container">
              <div @click="showPdf" class="container__item">
                № 1 (5)
              </div>
          </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
//import Footer from './Footer.vue'
//import ReadingPdf from './ReadingPdf'
import axios from 'axios'
//import {addDocument} from "@/api/documentAPI";
//import store from '../store.js'

export default {
  name: 'archive',
  data() {
    return {
      visible2022: false,
      visible2021: false,
      visible2020: false,
      visible2019: false,
      visible2018: false,
      visible2017: false,
      visible2016: false,
      visible2015: false,
      visible2014: false,
      visible2013: false,
      visible2012: false,
      visible2011: false,
      visible2010: false,
      visible2009: false,
      visible2008: false,
      isShowPdf: false,
      file:'',
      name:'',
      userid:''
    }
  },
  components: {

  },
  computed: {
      lang() {
          return this.$store.state.lang
      },
  },
  methods: {
    submitFile(){
      let formData=new FormData()
      formData.append('name',this.name)
      formData.append('file',this.file)
      formData.append('id',1)
       axios.post(`http://localhost:4000/documents/`,formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
       }).then(function(){
          console.log('SUCCESS!!');
        })
        .catch(function(){
          console.log('FAILURE!!');
        });
        console.log(localStorage.setItem("file"))
    } ,   
    handleFileUpload(event){
   //   this.name=this.$refs.name.names[0]
      this.file=this.$refs.file.files[0]
      const reader = new FileReader()
  reader.onload = (e) => {
    const fileUrl = e.target.result
 localStorage.setItem("file", fileUrl);
  }
reader.readAsDataURL(event.target.files[0])
const fileName = event.target.result
localStorage.setItem("name", fileName);
  }
  }
}
</script>

<style lang="less" scoped>
@import '../utils/const.less';
@import '../utils/mixins.less';

.archive {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  &__title {
    .header-small-bold();
    padding-bottom: 40px;
  }
  &__page {
    padding: 20px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: @utility-border;
    width: 90%;
    border-radius: 8px;
    box-shadow: 0px 8px 24px -4px rgba(0, 0, 0, 0.1);
  }
  &__container {
    width: 100%;
  }
}
.container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  &__href {
    text-decoration: none;
  }
  &__title {
    .title-big-bold();
    width: 100%;
    background:#1287A8;
    color: white;
    text-align: center;
    margin-top: 2px;
    min-height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.05em;
    user-select: none;
    &:hover{
        cursor: pointer;
    }
  }
  &__item {
    width: 170px;
    height: 70px;
    .nice-shadow();
    border-radius: 16px;
    cursor: pointer;
    margin: 20px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
  }
}
</style>