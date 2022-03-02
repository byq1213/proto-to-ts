import MyComponent from './MyComponent.vue'
MyComponent.install = function(app: any){
    app.component(MyComponent.name, MyComponent) // 注册组件,相当于 标签名关联到 模板文件
}

export {MyComponent}  // 这里可以defualt