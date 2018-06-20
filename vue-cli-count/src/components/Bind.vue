<template>
  <div>
     <div  v-if="showToolTip">
         <input v-model="text_content" >
     </div>
    <p @click="toggleToolTip">{{text_content}}</p>
  </div>
</template>
<script>

  export default {
    data(){
    return{
      showToolTip:false,
      text_content:'Edit_me'
    }
    },
    methods:{
      toggleToolTip:function(){
        this.showToolTip=! this.showToolTip
      }
    }
  }
</script>
