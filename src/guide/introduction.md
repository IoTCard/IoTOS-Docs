---
footer: false
---

# 介绍 {#deployment-service}



## 什么是 IoTOS? {#what-is-iotos}

IoTOS 开源我们会作为一个开源系列开源延展，目前包括:

- [IoTOS](https://gitee.com/chinaiot/iotos) 国际物联卡管理系统、极致同步算法、套餐多包装、自动化管理、商城管理
- [IoTOS-App](https://gitee.com/chinaiot/iotos-app) IoTOS适配移动端、端点聊天、购买下单、预存、充值续费
- [IoTOS-IM](https://gitee.com/chinaiot/iotos-app)  IoTOS 网络消息中间件 基于 [J-IM](https://gitee.com/xchao/j-im?_from=gitee_search) 拓展

IoTOS-IoTCard 基于物联网多上游API接口综合业务管理，遵从高效数据同步并维护运营，再到建立系统套餐分发进行资费营销，最后在营销、运营 等服务提供 过程中再次创造价值的流程。

**整个系统暂且 分为五大模块：**

*   **首页** ：统计分析展板；
*   **连接** ：流量卡、设备、通道 运营管理 配置查看；
*   **账号中心** ：企业、用户、角色 管理分配权限 账号；
*   **自动化** ：自动化管理规则、模板、推送配置、触发条件 等；
*   **系统管理** ：菜单、参数、字典、系统监控、系统工具、定时任务 等；

欢迎有兴趣的 开发者、商业合作、业务探讨 等 通过下方的联系方式联系。

## 优势{#advantage}

基于多能力接口 开放能力平台综合业务管理 / 运营物联卡,不仅限于物联网卡；

可为物联卡运营、接口对接需求 等垂直场景提供API对接管理基础架构，主要优势有：

* 多语言国际化(UI界面、后台回复、单用户喜好语言)
* 机器人推送（国内主流机器人、国际主流社交软件）
* 极致API同步能力采用队列多线程实例 多线程（队列多线程中增加java多线程，根据不同运营商接口独立特定同步算法体系
* 自动化规则定义 规则触发模板 通知配置 触发条件等
* 开源协议采用 Apache-2.0 (使用者可以自由修改，进行商业使用，没有开源要求)
* 采用主流 Java 架构，具备高拓展性、灵活性
* 对外提供内部 API，低成本二次开发
* 多端应用程序满足不同拓展业务场景


## 愿景{#vision}

IoTOS 不做物联网专家，而是通过开源让每个企业、每个开发者 都是自己的物联网专家：

以微薄之力，助力物联网行业发展；功成不必在‘我’。

* 集成上游多API基础能力，拿来即用
* 针对垂直行业提供一站式服务运营解决方案
* 开放自身平台能力，让更多的开发者参与进来
* 与企业、开发者 共同助力 物联网行业共建发展未来


## 在线体验{#online-experience}

- IoTOS PC端

开源演示地址：[http://demo.iotos.top](http://demo.iotos.top/)

默认账号密码：iotos，iotos.top

_（注意：演示环境已屏蔽管理权限和相关操作）_

- IoTOS-App 安装包下载

[https://gitee.com/chinaiot/iotos-app/tree/master/apk](https://gitee.com/chinaiot/iotos-app/tree/master/apk)

## 技术栈{#technology-stack}

本项目基于 [RuoYi-Vue](https://gitee.com/y_project/RuoYi-Vue) 后台开发框架，感谢 [RuoYi-Vue](https://gitee.com/y_project/RuoYi-Vue) 的开源。

* 前端技术栈：ES6、Vue、Vue-router、Vue-cli、Axios、Element-ui；
* 后端技术栈：Spring Boot、Mybatis-plus、Mybatis、RabbitMQ；

## 项目结构{#project-structure}

**后端结构**

```
├── iotos-admin              // 后台服务主程序
├── iotos-common             // 公共组件模块
├── iotos-common-syn-ap      // API请求配置中心
├── iotos-consumer-admin	   // 后台主程序-消费者
├── iotos-consumer-task      // 定时任务-消费者
├── iotos-framework	         // 框架核心
├── iotos-generator          // 代码生成
├── iotos-quartz             // 定时任务
├── iotos-system             // 系统代码

```
**前端结构**

```
├── iotos-ui			     // 后台项目
```

## 项目部署{#project-deployment}

点击下方链接进入查看项目部署方式：

[如何快速部署 IoTOS](http://www.iotos.top)

建议服务器最低配置：

| 类型 | 配置 |
|:-:|:-:|
|操作系统|CentOS8|
|CPU|4核|
|内存|8G|
|带宽|5M|
|硬盘|50G|

## 常见问题{#common-problem}

点击下方链接进入帮助手册查看常见问题的相关描述及更多帮助：

[常见问题](http://www.iotos.top/)

## 最近更新&后续开发方向{#follow-up-direction}



- [ ] 完善教程、按文档、视频 等资料文件形式 深入讲解 快速使用、了解运营、二次开发拓展、可发展方向等
- [x] 移动端适配企业查询、用户绑定、同样适配国际化；
- [x] OneLink EcV5接口业务继续延展：`智能诊断` 定义为平台数据诊断 API接口诊断且更具不同上游会展示出更多可诊断项界面等；
- [ ] `自动化` 业务模块定义完善、包括机器人对接等；
- [ ] `支付配置` 支付收款 国内主流支付接入、国际支付接入等；
- [ ] `套餐定义` 套餐包含多类型 多配置 多组合等方式实现；
- [ ] `企业预存`、`用户预存` 企业预存金额、订单返佣、用户充值预存 自主设置预付费扣费等；
- [ ] `充值续费` 企业或用户 充值、续费、预存 等业务延展；
- [ ] `中控分析` 包含但不限于 分析 企业、用户 充值数据（按时间、金额、交易类型、复购率、活性、数据同步成功率、交易订单时间区间 套餐结余 等）
- [ ] `商城` 发售商品 购买下单流程、分销、物流

## V1.0.0 更新日志{#v1.0.0}

- [x] 多语言国际化；
- [x] 通道、卡列表、用量记录、基础业务；
- [x] 卡号自动同步载入策略；
- [x] API目前仅支持 OneLink EcV5 接口(最终会依赖该接口全面对接 敬请期待！)；
- [x] OneLink EcV5同步算法策略队列多线程使用java多线程套娃式显著提升算法同步效率；
- [x] 用量、生命周期补偿算法完善；
- [x] 首页统计数据完善；

## V1.2.1 更新日志{#v1.2.1}

- [x] 登录页增加可修改数据轮播；
- [x] 登录页增加国内常用运营商平台网站、国际平台运营商网站、关于-IoTOS链接；
- [x] 登录页增加平台能力说明、开放协议说明、系列产品说明；
- [x] 增加适配移动端系统通知登录后通过[IoTOS-IM](https://gitee.com/chinaiot/iotos-im)下发公告通知；
- [x] 优化登录界面默认语言为 ‘中文’；

## V1.5.3 更新日志{#v1.5.3}

- [x] 通道数据统计增加 卡数量、总流量 已用流量 剩余流量 统计；
- [x] 卡详情增加会话信息查询会话记录（分页查询）、导出历史记录；
- [x] 新增智能诊断 卡状态、冻结状态、停机原因、区域限制状态、区域限制地区、设备状态、业务变更历史、已开通APN查询、诊断建议提示；（完美还原OneLink智能诊断）；
- [x] 优化卡号同步算法bug；
- [x] 优化卡号比对新增卡号算法定时任务触发间隔等；
- [x] 优化定时清理上游同步卡号缓存（确保上游卡号变动时更新卡号或已销户卡不再同步）；

## 联系我们{#contact-us}

如果你想加入我们的开源交流群、有任何 IoTOS 产品上的想法、意见或建议，或商务上的合作需求，请扫码添加 IoTOS 项目作者，加入群聊：

![WeChat](../public/images/readme-pic/cn/contact1.jpg)

- 微信公众号

![WeChatPublicAccount](../public/images/readme-pic/cn/gzhewm.gif)


## 捐赠支持{#donation-support}

如果您是企业的经营者并且有计划将 `IoTOS` 用在公司的经营产品中，欢迎进行长期捐赠。长期捐赠有商业上的益处有：

* 积极响应，快速维护，及时更新；
* 企业名称、Logo 及官网链接将长期展示在开源仓库、`IoTOS` 官网及宣发材料中；
* 捐赠金额同比例抵扣未来 `IoTOS` 的付费产品价格。

如果您对长期赞助 `IoTOS` 团队感兴趣，或者有其他好想法，欢迎联系开发团队微信 `iotos_top`，或发送邮件到 `card@iotos.top`。






