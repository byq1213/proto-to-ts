import {MyComponent} from './components/index' // 不会直接引用单页面模板*.vue,还需要给模板文件注入install信息
const install = (app:any, opt:any)=>{
    app.use(MyComponent) // use()里调用的就是这个install方法, app.use(这个组件), 可以说有use就得搭配install
}
export default { 
    install, // createApp(App).use(bb) // 这里import bb from "xxx" 的导出名无所谓,用的都是default
}