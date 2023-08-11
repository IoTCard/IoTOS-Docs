---
footer: false
---

# 正片部分 {#features}


<style src="@theme/styles/vue-mastery.css"></style>
<script setup>

 let videoList = [
      {
        url:"https://www.bilibili.com/video/BV1mV41157Rh/?share_source=copy_web&vd_source=541c4cf9c3b292abf5db62f583478344",
        bImg:"http://www.iotos.top/images/readme-pic/v00.png",
        dText:"开源IoTOS",
        d1Text:"项目介绍",
      },{
        url:"https://www.bilibili.com/video/BV1SF411f7Uk/?share_source=copy_web&vd_source=541c4cf9c3b292abf5db62f583478344",
        bImg:"http://www.iotos.top/images/readme-pic/v01.png",
        dText:"开源IoTOS",
        d1Text:"01由来&未来方向",
      },
    ]
   
</script>

## 视频目录 {#directory}

<div v-for="item in videoList" class="vue-mastery-link" style="margin-top: 10px;">
  <a :href="item.url" target="_blank">
    <div class="banner-wrapper">
      <img class="banner"  width="96px" height="56px" :src="item.bImg" />
    </div>
    <p class="description">{{ item.dText }} <span>{{ item.d1Text }}</span></p>
    <div class="logo-wrapper">
        <img  width="25px" src="http://www.iotos.top/logo.png" />
    </div>
  </a>
</div>


