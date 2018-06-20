<template>
  <div>
 11111111111
    <div> count is {{count}}</div>
      <button @click="increment">+1</button>
      <button @click="decrement">-1</button>
  </div>
</template>
<script>
  import { mapGetters,mapActions} from 'vuex'
  export default{
    computed:{
      ...mapGetters({
        'count':'getCount'
      })
    },
    methods:{
      ...mapActions([  'increment', 'decrement'])
    }
  }
</script>
