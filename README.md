# React-koa-Goods
React + koa 全栈电商项目

- 如何做项目实战
    1. react 比较复杂  先散打 再招式 
    2. 神三元项目的套路 数据流移动开发 仿 
        react hooks + redux + koa 
        拿捏分寸 + 恪守三元套路  
    3. 实战的路径
        + ts  mysql + node
    4. 实战中
        react + ts 
            + node
            + 性能优化考点
            + 组件 
   
- 项目上线服务器
    1. gitee 配置gitee pages 服务  静态文件托管服务 
    如果我们的项目是单纯的react前端项目(后端有第三方提供接口或不需要),
    npm run build 打包出来的文件都是静态文件 
    2. 买服务器
        1. putty 连接服务器的软件
        2. fillzilla ftp 上传文件服务 
        3. 服务器上运行起来 

1. 有一台服务器
2. 把mall npm run build dist/
3. server 目录删除 node_modules 
4. 使用 putty 或任何工具连接服务器 /var 目录下  使用makdir命令  /www/mall
5. filezilla 或者finalshell 连接服务器的ftp端口
6. 服务器开放了22端口 

7. dist /mall/dist  server /mall/server 
8. 服务器上可以运行node 
    yum i  -y node
9. /mall/server
    npm i (淘宝源)
    nodemon index.js

http://ip:9090/home/main 


http://120.26.49.172:3000/home/main
http://120.26.49.172:9090/

nginx  tomcat
80->3000

http://120.26.49.172
ngnix live-server  index.html在哪里 dist/index.html
 
