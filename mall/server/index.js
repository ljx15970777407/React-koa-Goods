// 不做mysql , json
// const fs = require('fs')
const Koa = require('koa')
const router = require('koa-router')();
const app = new Koa()
const MainData = require('./Data/mainData/MainData.json')
const ServerData = require('./Data/serverData/ServerData.json')
const cors = require('koa2-cors')
const Mock = require('mockjs')
const Random = Mock.Random

app.use(cors({
    origin: function(ctx) { //设置允许来自指定域名请求
        // if (ctx.url === '/test') {
        return '*'; // 允许来自所有域名请求
        // }
        // return 'http://localhost:3000'; //只允许http://localhost:8080这个域名的请求
    },
    maxAge: 5, //指定本次预检请求的有效期，单位为秒。
    credentials: true, //是否允许发送Cookie
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], //设置所允许的HTTP请求方法
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'], //设置服务器支持的所有头信息字段
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'] //设置获取其他自定义字段
}))
router.get('/home/main', async (ctx) => {
    ctx.response.body = {
        success: true,
        data: MainData
    }
})

router.get('/home/server', async (ctx) => {
    ctx.body = {
        success: true,
        data: ServerData
    }
})

router.get('/home/list', async (ctx) => {
    // 参数 limit page 
    let { limit = 20, page = 1 } = ctx.request.query
    // console.log(limit, page, '---------------------');
    // http://localhost:9090/home/list?limit=20&page=1
    // qs  /detail/:123 
    // to be continue 根据limit 和page 做数据筛选 

    let data = Mock.mock({
        'list|20': [{
            "id": '@increment',
            'title': '@ctitle(15, 20)',
            'label': '@ctitle(3, 5)',
            'imgsrc': Random.image('94x107')
        }]
    })

    ctx.body = {
        success: true,
        data
    }
})

app
    .use(router.routes())
    .use(router.allowedMethods())
// 1. http服务
// 2. 简单的路由模块
// 3. cors
// 4. 返回数据

app.listen(9090, () => {
    console.log('server is running 9090')
})
