---
footer: false
---

# Highlight Video {#highlightVideo}



<style src="@theme/styles/vue-mastery.css"></style>
<script setup>


  let videoList = [
       {
         url: "https://www.bilibili.com/video/BV1Gh4y1F7FP",
         bImg: "http://www.iotos.top/images/readme-pic/f01.png",
         dText: "Domestic open source software",
         d1Text: "Have you ever used open source IoTOS?",
       },{
         url: "https://www.bilibili.com/video/BV1Zz4y1s7rT",
         bImg: "http://www.iotos.top/images/readme-pic/f02.png",
         dText: "Open Source IoTOS",
         d1Text: "Poster share!",
       },{
         url: "https://www.bilibili.com/video/BV1Lh4y1C7Mb",
         bImg: "http://www.iotos.top/images/readme-pic/f03.png",
         dText: "Open Source IoTOS",
         d1Text: "Follow more than 100 people!",
       }
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
