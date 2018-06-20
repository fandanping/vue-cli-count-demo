export default{
 increment (store){
    store.commit('increment')
 },
  decrement(store){
   store.commit('decrement');
  }
}
