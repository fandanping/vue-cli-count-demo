<template>
 <div>
   <div>
     <ul style="overflow: hidden">
       <li v-for="(item,index) in navs"  :class="{'show':item.active}" @click="switchContent(item,index)">{{item.name}}</li>
     </ul>
   </div>
   <div class="item-content">
      you choose   {{content}}!!!

      导航切换的正文
   </div>
 </div>
</template>
<script>

  export default{
    data(){
     return{
       navs:[
         {name:'javascript',active:true},
         {name:'java',active:false},
         {name:'css',active:false},
         {name:'vue',active:false}
       ],
       content:'javascript'
     }
    },
    methods:{
      switchContent:function(item,index){
            for(var i=0;i<this.navs.length;i++){
                this.navs[i].active=false;
            }
        this.navs[index].active = true;
            this.content=item.name;
      }
    }

  }
</script>
<style scoped>
   ul li{
     list-style:none;
     display: inline-block;
     padding:20px 50px;
   }
   ul li.show{
      background-color: deepskyblue;
   }

   .item-content{
        border:1px solid black;
   }
</style>
