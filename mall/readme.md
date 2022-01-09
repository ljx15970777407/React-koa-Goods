- 三元套路
    1. redux 放在 pages/模块中 套路
        数据驱动界面 
    2. 切页面时的样式组件 
    3. 路由配置 react-router-config 数组 动态加载组件 
    4. better-scroll load ... common 组件 

- 转移到自己的项目 
    业务打理经验 

- 首页开发套路
    切页面 == 组件化 
    1. 组件思路
       connect()(search + scroll(memo, Lazyload 组件化) + tabbar)  
        后端api mockjs koa 两种都用 

- 页面引入Scroll, 垂直方向滚动  
    Scroll 里一定要有子节点 <div>
- 组件化 做一个组件
    1. 数据怎么来？
        koa 
    2. scroll
    3. 写组件 切页面 

- 三元页面模板
    ```
    import React from 'react';
// import './Server.style.js'
import { connect } from 'react-redux'
import Scroll from '../../baseUI/scroll'

const Server = (props) => {
    const { category } = props

    return (
        <>
            <Scroll
                direction="vertical"
                refresh={false}
            >
                <div>
                    Server
                </div>
            </Scroll>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        category: state.server.category
    }
}
export default connect(mapStateToProps, {})(Server)
    ```

- swiper 组件打理流程
    1. 安装相应版本的swiper
    2. 引入swiper 及样式
    3. 固定的html 结构 .swiper-container > (.swiper-wrapper >
        .swiper-item) + .swiper-pagination
    4. useEffect 实例化Swiper 

- 电商menubar
    1. swiper 提供了swiper-bar 这种形式
    2. 使用容器组合组件
        menubar swiper
        menubarItem 菜单
    3. flex 每行交给复用组件
    4. 数据设计很奇妙

- 金蝉脱壳
    1. 把不想展示的功能直接截图 放到assets目录下
    2. 切页面组件
    3. 一屏之外的模块 就stylecomponents 解决

- 项目考点 做局
    1. 性能优化
        路由 懒加载 
        组件memo 
        connect(mapStateToProps, mapDispatchToProps)(memo(Component))
        lazyload 图片
        雪碧图 用一张全家福代替一堆的小图片 虽然体积大了但是有效的减少了请求数
        如今 base64 tabbar 图片由webpack打包时自动转成base64放在css文件里了 
        所以过时了 
        雪碧图是google 十年前的页面性能优化利器 一个网页一张图 
        base64google发明的 
    2. 样式组件
    3. better-scroll
    4. 组件化风格 
    5. hooks 编程风格， 比如在tabbar切换时使用了useLocation 来匹配路由

- tabbar 切换功能
    1. 高亮
    2. 路由
        1. spa
        2. 匹配
        3. 组件落地
            route.renderRoutes()
        - 分开来的路由
        - router

- 页面 路由 
    1. 路由管页面级别组件 SPA 单页应用
    2. 页面可以有多个模块 section 
    3. 路由  / 模块 /user /posts 
        子模块 
    4. 多级路由设计方案 
        /home /home/my /home/server 路由多模块
        /home 
        一级路由， 这个页面都是它的 除非有layout 
            /home Tabbuttom component 
                tabbar的空间有了 
                /home/Main
                    二级路由 展示这个页面
    5. 提前设计页面模块与路由的关系 

- 状态丢失问题
    1. 刷新页面 store 回到初始值 
    2. localStorage 
    3. 用户可能从任何一个路由进来 分享 

- tabbar 开发流程
    1. 二级路由构建， 组件动态路由落地设计 
        一级路由tabbar 二级路由显示页面级别组件
    2. 全局状态中 app index messageCount 
    3. MVVM tabbar 组件开发 点击时 维护状态的正确性 
    4. 考虑用户直出

 - search 组件周边
    点击后 history.push 进入search 
    Main -> 传进去
    + 弹层? 做自有状态(useState) + 组件 

- 状态分寸 
    1. redux 数据流为主 确保数据的共享和状态一致性 
        useState(组件的私有状态)是破坏一致性的 
    2. 要不要用useState 就看是否要和其他组件共享 
    3. 放在reducer也有好处 复杂组件内部早晚会共享
        严格的修改策略
    4. isShow isOpen ......

- 父子组件规矩
    1. 父组件(页面级) 请求数据(redux) + 业务逻辑 
    2. 数据和业务逻辑提供props传给子组件
    3. 子组件能越UI就越好 无状态 
    4. 一方面是各司其职， 性能优化
        热更新 
    5. 父子之间不用redux，用传值和回调 

- browserRouter hashRouter 在本地调试
    当url直接访问时没有bug
    
    server ip -> www 80 3000 
    root /var/www/mall/dist 
    / index.html bundle.js  browserRouter

    /home/main -> nginx 
    /home? 404 

    