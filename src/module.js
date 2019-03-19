import routes from './router/routes'
import storeModule from './store/storeModule'
import CONST from '../config/const'
import libs from '../config/libs'
let moduleName = require('../package.json').name

export default Vue => {
  // 注册路由
  Vue.prototype.$addRoutes(routes, () => {})

  // 注册状态树
  Vue.prototype.$addStore(moduleName, storeModule, () => {})

  // 注册菜单
  Vue.prototype.$addMenus(routes, () => {})

  // 注册常量
  Vue.prototype.$addConst(CONST, () => {})

  // 注册libs
  let linkLibs = libs => libs.map(item => CONST.SERVER_URL + 'libs/' + item)

  Vue.prototype.$addlibs(linkLibs(libs)).then(() => {
    console.log('libs注册完成')
  })
  console.log(
    `%c${moduleName}模块加载完成`,
    'background: #4192d9; padding: 5px; color: #fff'
  )
}
