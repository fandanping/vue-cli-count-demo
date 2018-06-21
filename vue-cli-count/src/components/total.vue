<template>
<div>
  购物车清单
   <ul>
     <li>
       <span>全选<input type="checkbox" @click="selectAll()" v-model="checked"></span><span>商品</span><span>数量</span><span>单价</span><span>金额</span><span>操作</span>
       <label>
        全选 {{checked}}
       </label>
     </li>
     <li v-for="(item,index) in items">
       <span><input type="checkbox" v-model="checkedNames" :value="item.name" @click="itemCheck(index)"></span><span>{{item.name}}</span><span><button @click="decCount(index)">-1</button>{{item.count}}<button @click="addCount(index)">+1</button></span><span>{{item.price}}</span><span>{{item.price * item.count}}</span><span @click="deleteItem(index)">删除</span>
     </li>
   </ul>
  <div><span>共{{getTotal.totalNum}}件商品</span><span>总价：{{getTotal.totalPrice}}</span></div>
</div>
</template>
<script>
  export default{
    data(){
      return{
        checked: false,
        checkedNames: [],
        checkedArr: ["Web Development", "Design", "Integration","Training"],
        items: [
          {
            name: 'Web Development',
            price: 300,
            count:1,
            select:false
          },{
            name: 'Design',
            price: 400,
            count:1,
            select:false
          },{
            name: 'Integration',
            price: 250,
            count:1,
            select:false
          },{
            name: 'Training',
            price: 220,
            count:1,
            select:false
          }
        ]
      }
    },
    computed:{
      getTotal:function(){
           var proList=this.items.filter(function(val){
             return val.select ==true;
           })
           var totalPrice=0;
           for(var i=0,len=proList.length;i<len;i++){
             totalPrice +=proList[i].price *proList[i].count;
          /*  console.log(proList[i].price);
             console.log(proList[i].count);
             console.log(totalPrice);*/
           }
           return {
              totalNum:proList.length,totalPrice:totalPrice
           }
      }
    },
    methods:{
      //全选与反选
      selectAll:function(){
        if (this.checked) {
          this.checkedNames = [];
          for(var i=0;i<this.items.length;i++){
            this.items[i].select=false;
          }
        } else {
          this.checkedNames = this.checkedArr
          for(var i=0;i<this.items.length;i++){
            this.items[i].select=true;
          }
        }
      },
      addCount:function(index){
        this.items[index].count++;
      },
      decCount:function(index){
        if(this.items[index].count>0){
          this.items[index].count--;
        }else{
          alert("你不能在减少了");
        }
      },
      deleteItem:function(index){
        this.items.splice(index,1);
      },
      itemCheck:function(index){
            if(this.items[index].select){
              this.items[index].select=false;
            }else{
              this.items[index].select=true;
            }
      }
    },
    watch: {
      "checkedNames": function() {
        if (this.checkedNames.length == this.checkedArr.length) {
          this.checked = true
        } else {
          this.checked = false
        }
      }
    },
    mounted: function () {

    }
  }
</script>
<style>
  ul li{
    list-style: none;
  }
  ul li span{
    display: inline-block;
    width:150px;
    border:1px solid silver;
  }
</style>
