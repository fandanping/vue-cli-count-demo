<template>
<div>
  购物车清单
   <ul>
     <li>
       <span>全选</span><span>商品</span><span>数量</span><span>单价</span><span>金额</span><span>操作</span>
     </li>
     <li v-for="item in items">
       <span><input type="checkbox"></span><span>{{item.name}}</span><span><button>-1</button>1<button>+1</button></span><span>{{item.price}}</span><span>jkj</span><span>删除</span>
     </li>
   </ul>
</div>
</template>
<script>
  export default{
    data(){
      return{
        items: [
          {
            name: 'Web Development',
            price: 300,
            active:false
          },{
            name: 'Design',
            price: 400,
            active:false
          },{
            name: 'Integration',
            price: 250,
            active:false
          },{
            name: 'Training',
            price: 220,
            active:false
          }
        ]
      }
    },
    methods:{

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
