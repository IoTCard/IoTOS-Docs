---
footer: false
---

# Introduction {#deployment-service}



## What is IoTOS? {#what-is-iotos}

IoTOS open source will be extended as an open source series, which currently includes:

- [IoTOS](https://gitee.com/chinaiot/iotos) International IoT Card Management System, Extreme Synchronization Algorithm, Package Multi-Packaging, Automated Management, Mall Management
- [IoTOS-App](https://gitee.com/chinaiot/iotos-app) IoTOS adapts to mobile terminal, endpoint chat, purchase order, pre-deposit, recharge and renewal
- [IoTOS-IM](https://gitee.com/chinaiot/iotos-app) IoTOS network message middleware is based on [J-IM](https://gitee.com/xchao/j-im?_from=gitee_search )([t-io](https://gitee.com/tywo45/t-io?_from=gitee_search)architecture) extension

IoTOS-IoTCard is based on the comprehensive business management of multiple upstream API interfaces of the Internet of Things, follows the process of efficient data synchronization and maintenance operation, then establishes system package distribution for tariff marketing, and finally creates value again in the process of marketing, operation and other service provision.

**The whole system is temporarily divided into five modules:**

* **Homepage**: statistical analysis panel;
* **Connection**: traffic card, equipment, channel operation management configuration view;
* **Account Center**: enterprise, user, role management and distribution authority account;
* **Automation**: automation management rules, templates, push configuration, trigger conditions, etc.;
* **System Management**: menu, parameters, dictionary, system monitoring, system tools, scheduled tasks, etc.;

Interested developers, business cooperation, business discussions, etc. are welcome to contact through the contact information below.

## advantage {#advantage}

Based on the multi-capability interface, the open capability platform comprehensive business management / operation of the IoT card is not limited to the IoT card;

It can provide API docking management infrastructure for vertical scenarios such as IoT card operation and interface docking requirements. The main advantages are:

* Multilingual internationalization (UI interface, background reply, single user preferred language)
* Robot push (domestic mainstream robots, international mainstream social software)
* The ultimate API synchronization capability adopts queue multi-thread instance multi-thread (java multi-thread is added to queue multi-thread, and independent specific synchronization algorithm system according to different operator interfaces
* Automation rule definition, rule trigger template, notification configuration, trigger condition, etc.
* The open source protocol adopts Apache-2.0 (users can modify it freely for commercial use, there is no open source requirement)
* Adopt mainstream Java architecture, with high scalability and flexibility
* Provide internal API externally, low-cost secondary development
* Multi-terminal applications meet different business expansion scenarios


## vision {#vision}

IoTOS is not an IoT expert, but allows every enterprise and developer to be its own IoT expert through open source:

Help the development of the Internet of Things industry with meager efforts; success does not have to be 'me'.

* Integrate upstream multi-API basic capabilities, ready to use
* Provide one-stop service operation solutions for vertical industries
* Open up its own platform capabilities to allow more developers to participate
* Work with enterprises and developers to help the Internet of Things industry to build and develop the future


## Online Experience {#online-experience}

- IoTOS PC terminal

Open source demo address: [http://demo.iotos.top](http://demo.iotos.top/)

Default account password: iotos, iotos.top

_(Note: The demo environment has blocked administrative rights and related operations)_

- IoTOS-App installation package download

[https://gitee.com/chinaiot/iotos-app/tree/master/apk](https://gitee.com/chinaiot/iotos-app/tree/master/apk)

## technology stack {#technology-stack}

This project is based on the background development framework of [RuoYi-Vue](https://gitee.com/y_project/RuoYi-Vue), thanks to the open source of [RuoYi-Vue](https://gitee.com/y_project/RuoYi-Vue) .

* Front-end technology stack: ES6, Vue, Vue-router, Vue-cli, Axios, Element-ui;
* Backend technology stack: Spring Boot, Mybatis-plus, Mybatis, RabbitMQ;

## Project Structure {#project-structure}

**Backend structure**

```
├── iotos-admin // background service main program
├── iotos-common // Common component module
├── iotos-common-syn-ap // API request configuration center
├── iotos-consumer-admin // background main program - consumer
├── iotos-consumer-task // Timing task-consumer
├── iotos-framework // framework core
├── iotos-generator // code generation
├── iotos-quartz // Timing tasks
├── iotos-system // system code

```
**Front-end structure**

```
├── iotos-ui // background project
```

## Project deployment {#project-deployment}

Click the link below to view the project deployment method:

[How to quickly deploy IoTOS](http://www.iotos.top)

Recommended minimum server configuration:

| Type | Configuration |
|:-:|:-:|
|Operating System|CentOS8|
|CPU|4 core|
|Memory|8G|
|Bandwidth|5M|
|Hard disk|50G|

## Common Problem {#common-problem}

Click the link below to enter the help manual to view the description of common problems and more help:

[FAQ](http://www.iotos.top/)

## Recent update & follow-up development direction {#follow-up-direction}



- [ ] Perfect tutorials, in-depth explanations in the form of documents, videos and other data files Quick use, understanding of operations, secondary development and expansion, possible development directions, etc.
- [x] The mobile terminal adapts to enterprise query, user binding, and also adapts to internationalization;
- [x] OneLink EcV5 interface business continues to expand: `Smart Diagnosis` is defined as platform data diagnosis API interface diagnosis and more different upstreams will display more diagnosable item interfaces, etc.;
- [ ] `Automation` business module is well defined, including robot docking, etc.;
- [ ] `Payment configuration` Payment collection Domestic mainstream payment access, international payment access, etc.;
- [ ] `Package Definition` The package includes multiple types, multiple configurations, and multiple combinations;
- [ ] `Enterprise pre-deposit`, `User pre-deposit` Enterprise pre-deposit amount, order rebate, user top-up pre-deposit, independently set pre-paid deduction, etc.;
- [ ] `Recharge and Renewal` Business or user recharge, renewal, pre-deposit and other business extensions;
- [ ] `Central control analysis` includes but is not limited to analysis of enterprise and user recharge data (according to time, amount, transaction type, repurchase rate, activity, data synchronization success rate, transaction order time interval, package balance, etc.)
- [ ] `Mall` Release products Purchase order process, distribution, logistics

## V1.0.0 Changelog {#v1.0.0}

- [x] Multilingual internationalization;
- [x] channels, card lists, usage records, basic services;
- [x] Card number automatic synchronization loading strategy;
- [x] API currently only supports the OneLink EcV5 interface (will eventually rely on this interface for full docking, so stay tuned!);
- [x] OneLink EcV5 synchronization algorithm policy queue multi-threading uses java multi-threaded matryoshka to significantly improve algorithm synchronization efficiency;
- [x] The usage and life cycle compensation algorithm is perfect;
- [x] Home page stats improved;

## V1.2.1 Changelog {#v1.2.1}

- [x] Added a modifiable data carousel to the login page;
- [x] The login page adds the domestic commonly used operator platform website, the international platform operator website, and about-IoTOS links;
- [x] The login page adds platform capability descriptions, open protocol descriptions, and product series descriptions;
- [x] Added notifications for adapting the mobile terminal system to issue announcements through [IoTOS-IM](https://gitee.com/chinaiot/iotos-im) after logging in;
- [x] Optimize the default language of the login interface to 'Chinese';

## V1.5.3 change log {#v1.5.3}

- [x] channel data statistics increase card number, total flow, used flow, remaining flow statistics;
- [x] Add session information query session records (paging query) and export history records for card details;
- [x] Newly added smart diagnosis card status, freezing status, downtime reason, regional restriction status, regional restriction area, device status, business change history, APN query already opened, diagnosis suggestion prompt; (perfect restoration of OneLink smart diagnosis);
- [x] Optimize the card number synchronization algorithm bug;
- [x] Optimize card number comparison, add card number algorithm timing task trigger interval, etc.;
- [x] Optimize the regular cleaning of the upstream synchronization card number cache (to ensure that the card number is updated when the upstream card number changes or the canceled card is no longer synchronized);

## Contact us {#contact-us}

If you want to join our open source exchange group, have any ideas, opinions or suggestions on IoTOS products, or business cooperation needs, please scan the QR code to add IoTOS project authors and join the group chat:

![WeChat](../public/images/readme-pic/cn/contact1.jpg)

- WeChat public account

![WeChatPublicAccount](../public/images/readme-pic/cn/gzhewm.gif)


## Donation Support {#donation-support}

If you are a business owner and have plans to use `IoTOS` in your company's business products, long-term donations are welcome. The business benefits of long-term donations are:

* Positive response, fast maintenance and timely update;
* The company name, logo and official website link will be displayed in the open source warehouse, `IoTOS` official website and publicity materials for a long time;
* The donation amount will be deducted from the price of paid products of `IoTOS` in the same proportion.

If you are interested in long-term sponsorship of the `IoTOS` team, or have other good ideas, please contact the development team on WeChat `iotos_top`, or send an email to `card@iotos.top`.
