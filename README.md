> 学习React+Node.js开发的一个实战项目，从开发到部署。前后端分离，涉及React界面编写，服务端连接MySql数据库，跨域，部署等多方面知识。简易框架。日后可供参考。

## 技术栈

前端：

- React
- React Router
- Fetch API
- Material-UI



后端：

- Node+Express
- 数据库mysql +sequelize
- moment.js（JavaScript日期处理类库）
- cors解决跨域



接口测试

- mocha 
- chai chai-http（HTTP断言工具）
- nyc 测试接口的代码覆盖率



## 部署

部署

- PM2 守护进程
- Ngnix

后端服务域名：reactnode-api.com

前端服务域名：reactnode.com



**后端部署**

1、`pm2 start bin/www`

2、修改Ngnix配置文件

```json
server {
    listen       80;
    server_name  reactnode-api.com

    location / {
        proxy_pass http://localhost:3000;
    }
}
```

3、Ngnix重新加载并配置

```bash
nginx -t
nginx -s reload
//nginx: the configuration file D:\Environment\nginx-1.15.2/conf/nginx.conf syntax is ok
//nginx: configuration file D:\Environment\nginx-1.15.2/conf/nginx.conf test is successful
全部成功才行
进入nginx文件中去运行
```

4、修改本地etc/host域名解析`C:\Windows\System32\drivers\etc`

```json
127.0.0.1       reactnode-api.com
//新增
```

5、`http://reactnode-api.com/articles/`运行验证



**前端部署**

1、`num run build`打包

2、将前端项目打包后的buil文件复制到html文件夹中

3、修改Ngnix配置

```json
server {
    listen       80;
    server_name  reactnode.com

    location / {
        root   html/build;
        index  index.html index.htm;
    }
}
```

4、Ngnix重新加载并配置

```bash
nginx -t
nginx -s reload
//nginx: the configuration file D:\Environment\nginx-1.15.2/conf/nginx.conf syntax is ok
//nginx: configuration file D:\Environment\nginx-1.15.2/conf/nginx.conf test is successful
全部成功才行
进入nginx文件中去运行
```

5、修改本地etc/host域名解析`C:\Windows\System32\drivers\etc`

```json
127.0.0.1       reactnode.com
```

6、浏览器打开`http://reactnode.com`运行验证





## RESTFul风格

**动作**

- `GET`：读取
- `POST`：新建
- `PUT`：更新（全部）
- `PATCH`：更新（部分）
- `DELETE`：删除















