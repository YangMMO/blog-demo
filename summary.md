### 计划事项
> - [x] express-generator 生成工程
> - [x] 博客逻辑迁移
> - [x] 将异步加载博客数据的逻辑改成页面直出
> - [x] 同样将这个工程部署到云服务上，并安装PM2来启动该服务

### 总结
> - 项目中出现挺多问题的，如ssh配置后pm2 无法远程clone 项目，配置的git路径为 git@github 格式，报错显示没有权限，但是可本地通过 ssh 'root@xx.xx.xx.x'登陆至远程服务器，目前采用http的地址clone下来，而且pm2 depoly production update 也无法更新代码，目前更新代码的形式采用 pm2 deploy exec "git pull"的形式来完成更新，求大佬解疑 _(:з」∠)_

### 第二次提交计划事项
> - [x] favicon
> - [x] https配置
> - [ ] 编辑功能