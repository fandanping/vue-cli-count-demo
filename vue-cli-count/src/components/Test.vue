<template>
<div>

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
