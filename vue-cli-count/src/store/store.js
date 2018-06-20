import Vuex from 'vuex'
import defaultState from './state/state'
import getters from './getters/getters'
import actions from './actions/action'
import  mutations from './mutations/mutations'

/*Vue.use(Vuex)*/

export default()=>{
 return new Vuex.Store({
   strict:true,
   state:defaultState,
   getters:getters,
   actions:actions,
   mutations:mutations
 })
}
