---
footer: false
---

# Features part {#features}


<style src="@theme/styles/vue-mastery.css"></style>
<script setup>

  let videoList = [
       {
         url: "https://www.bilibili.com/video/BV1mV41157Rh",
         bImg: "http://www.iotos.top/images/readme-pic/v00.png",
         dText: "Open Source IoTOS",
         d1Text: "Project Introduction",
       },{
         url: "https://www.bilibili.com/video/BV1SF411f7Uk",
         bImg: "http://www.iotos.top/images/readme-pic/v01.png",
         dText: "Open Source IoTOS",
         d1Text: "01 Origin & Future Direction",
       },
     ]
   
</script>

## Video Directory {#directory}

<div v-for="item in videoList" class="vue-mastery-link" style="margin-top: 10px;">
   <a :href="item.url" target="_blank">
     <div class="banner-wrapper">
       <img class="banner" width="96px" height="56px" :src="item.bImg" />
     </div>
     <p class="description">{{ item.dText }} <span>{{ item.d1Text }}</span></p>
     <div class="logo-wrapper">
         <img width="25px" src="http://www.iotos.top/logo.png" />
     </div>
   </a>
</div>
