---
title: Hello World
lastUpdated: 'Last Updated'
sidebar: auto
---
> 问题已解决111111

### 问题回顾：

![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/8b1271351c1f426ba0ea2d8907f04a45.png)

### 解决方法一（大部分都是这个原因）：

> 首先先检查是否打开了`多个VMware`应用程序，如果打开了关掉所有vm重开即可，如果不确定后台是否多开可以去任务管理器查看关闭

![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/6526846915a74369b97fadf55980bf53.png)

### 解决方法二（如果上面的方法无效则尝试这个方法）：

在本篇博客最上面的图片中有配置文件的路径，找到该路径上一级后缀为`.lck的文件夹`删除即可，还不行重启一下`vmware`

![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/afb2d9e44d1c4be6949cd68267ee7c0e.png)
