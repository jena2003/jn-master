<template>
<div id="my_pdf_viewer">
<div id="iframe">
  
   <iframe src="http://localhost:4000/c269a3f5-d8bd-4425-959a-5bfaf8e773da.pdf" width="700" height="500" style="border: none" />

</div>
</div>
 
</template>
 
<script>
//import pdf from 'vue-pdf'
export default {
  name: 'ReadingPdf',
  component:{
  // iframe
  }
  
}
</script>
 
<style>
iframe{
  width: 600px;
  height: 600px;
}
</style>