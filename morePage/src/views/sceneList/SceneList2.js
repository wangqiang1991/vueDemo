import MintUI from 'mint-ui'    //需要调用就引入
import 'mint-ui/lib/style.css' // 需要调用就引入
import commons from '../../commons'
import sceneList2 from './sceneList2.vue'  
// 使用
Vue.use(commons);
Vue.use(MintUI)
// 将路由注入到Vue对象中
new Vue({
  el: '#app',
  render: h => h(sceneList2)    //注意名字和上面的对应 home 对应 home.vue
})
