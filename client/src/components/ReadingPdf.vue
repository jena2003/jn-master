
<template>
  <div class="page-container">
    <div id="canvas-container">
    <div class="main">
      <pdf
      :src="src"
      :page="currentPage"
      @progress="loadedRatio = $event"
      @loaded="loadPdfHandler"
      @num-pages="pageCount=$event"
      @page-loaded="currentPage=$event"
      ref="wrapper"
      class="pdf"
      ></pdf>
    </div>
    </div>
    <ul class="footers">
      <button :class="{select:idx==0}" @touchstart="idx=0" @touchend="idx=-1" @click="scaleD">
        <p class = "more-p"> Увеличить </p>
      </button>
      <button :class="{select:idx==1}" @touchstart="idx=1" @touchend="idx=-1" @click="scaleX">
                 <p class = "small-p"> Уменьшить </p>
      </button>
      <button :class="{select:idx==2}" @touchstart="idx=2" @touchend="idx=-1" @click="changePdfPage(0)">
                 <p class = "up-p"> Предыдущая страница </p>
      </button>
      <button :class="{select:idx==3}" @touchstart="idx=3" @touchend="idx=-1" @click="changePdfPage(1)">
                 <p class = "down-p"> Следующая страница </p>
      </button>
      <button :class="{select:idx==4}" @touchstart="idx=4" @touchend="idx=-1">
      <input type = "number" class="val" :value = value />
      </button>
      
      <button :class="{select:idx==5}" @touchstart="idx=3" @touchend="idx=1" @click="Download">
        <a class = "down-p">Скачать </a>
      </button>
    </ul>
  </div>
 
</template>
 
<script>
import pdf from 'vue-pdf'
//import store from '../store.js'
export default {
  name: 'ReadingPdf',
  data() {
    return {
             currentPage: 1, // номер текущей страницы
             pageCount: 0, // общий номер страницы
      scale: 100,
      idx: -1,
      loadedRatio: 0,
      src: 'http://localhost:4000/4d01f2ec-c667-41df-b213-d671738f335f.pdf',
      value:1
    }
  },
  created() {
         this.src = pdf.createLoadingTask (this.src) // работа с междоменными
  },
  components: {
    pdf
  },
  methods: {
         // Изменяем номер страницы PDF, передается val, чтобы различать значение предыдущей страницы и следующей страницы, 0 предыдущая страница, 1 следующая страница
    changePdfPage(val) {
      if(val === 0 && this.currentPage > 1) {
        this.currentPage--;
       this.value = this.currentPage
      }
      if(val === 1 && this.currentPage < this.pageCount) {
        this.currentPage++;
          this.value = this.currentPage
      }
      console.log(this.currentPage);
      console.log(this.pageCount);
    },

    goBack() {
      this.$router.go(-1);
    },
         // Когда pdf загружен
    loadPdfHandler() {
             this.currentPage = 1; // загружаем первую страницу при загрузке
    },
         //Увеличить
    scaleD() {
      this.scale += 5;
      this.$refs.wrapper.$el.style.width = parseInt(this.scale) + "%";
    },
 
         //Уменьшить
    scaleX() {
      if(this.scale == 100) {
        return;
      }
      this.scale += -5;
      this.$refs.wrapper.$el.style.width = parseInt(this.scale) + "%";
      
    },
    Download(){
  
    }
  }
}

</script>
 
<style>
.main{
height:600px;
width:50%;
overflow: auto;
background: #333;
    text-align: center;
    border: solid 20px;
}
.footers {
   position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  z-index: 0;
  color: #333;
  border-top: 1px solid #f0f0f0;
  line-height: 10px;

}
.li {
  text-align: center;
  flex: 1;
  padding: 5px;
  cursor: pointer;
}
.ul {
  list-style: none;
}
.more-p {
  border-right: 1px solid #f0f0f0;
  margin-right: 40px;
  cursor: pointer;
}
.small-p {
  margin-right: 40px;
  cursor: pointer;
}
.up-p {
  margin-right: 40px;
  cursor: pointer;
}
.down-p {
  border-radius: 0 none;
  cursor: pointer;
  margin-right: 50px;
}

</style>