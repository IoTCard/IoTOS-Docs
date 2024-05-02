---
footer: false
---

# 花絮视频 {#highlightVideo}



<style src="@theme/styles/vue-mastery.css"></style>
<script setup>


 let videoList = [
    {
        url:"https://www.bilibili.com/video/BV1cp4y1F7eU/?spm_id_from=333.999.0.0&vd_source=dd1ff5f9b766b029147919f86e238c99",
        bImg:"http://www.iotos.top/images/readme-pic/f04.png",
        dText:"IoTOS-Plus ",
        d1Text:"介绍PPT",
      },
      {
        url:"https://www.bilibili.com/video/BV1fj41187m8/?spm_id_from=333.999.0.0&vd_source=dd1ff5f9b766b029147919f86e238c99",
        bImg:"http://www.iotos.top/images/readme-pic/f05.png",
        dText:"Plus ",
        d1Text:"‘遥遥领先’ | 相约十月",
      },
      {
        url:"https://www.bilibili.com/video/BV1Gh4y1F7FP/?share_source=copy_web&vd_source=541c4cf9c3b292abf5db62f583478344",
        bImg:"http://www.iotos.top/images/readme-pic/f01.png",
        dText:"国产开源软件 ",
        d1Text:"开源IoTOS 你用过吗？",
      },{
        url:"https://www.bilibili.com/video/BV1Zz4y1s7rT/?share_source=copy_web&vd_source=541c4cf9c3b292abf5db62f583478344",
        bImg:"http://www.iotos.top/images/readme-pic/f02.png",
        dText:"开源IoTOS",
        d1Text:"海报分享！",
      },{
        url:"https://www.bilibili.com/video/BV1Lh4y1C7Mb/?share_source=copy_web&vd_source=541c4cf9c3b292abf5db62f583478344",
        bImg:"http://www.iotos.top/images/readme-pic/f03.png",
        dText:"开源IoTOS",
        d1Text:"关注超过100人！",
      }
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



