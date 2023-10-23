<script setup lang="ts">
import { onMounted } from 'vue'
import SiteMap from './SiteMap.vue'
// import NewsLetter from './NewsLetter.vue'
import { load, data, base } from './sponsors'
import SponsorsGroup from './SponsorsGroup.vue'
import VueMasteryModal from './VueMasteryModal.vue'

onMounted(async () => {
  await load();
})
</script>

<template>
  <section id="hero">
    <h1 class="tagline">
      <span class="accent">IoTOS-IoTCard</span>
      <br />高效实用 IoTCard 管理 & 运营系统。
    </h1>
    <p class="description">
      物联网卡运营综合平台 多接口能力集成，极致同步算法、千万数据承载量、国际化方案。<br/> 多端系统、直充内充、内置商城、套餐打包、自动化管理、预存扣费。
    </p>
    <p class="actions">
      <VueMasteryModal />
      <a target="_blank" class="setup sourceCodeGitee" href="http://demo.iotos.top">演示站点</a>
      <a target="_blank"  class="get-started demoA" href="http://vip.iotos.top/register">
        领先商业版
        <svg
          class="icon"
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          viewBox="0 0 24 24"
        >
          <path
            d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"
          />
        </svg>
      </a>
      <a class="setup btn1" href="/guide/introduction.html">开始搭建</a>
    </p>
  </section>


  <section id="special-sponsor">
     <span class="lead"><a  href="/sponsor/">铂金赞助商展位 点击了解更多</a></span>
    <template v-if="data && data.special">
      <template v-for="{ url, img, name, description } of data.special">
        <a :href="url" target="_blank" rel="sponsored noopener">
          <picture v-if="img.endsWith('png')">
            <source
              type="image/avif"
              :srcset="`${base}/images/${img.replace(/\.png$/, '.avif')}`"
            />
            <img :src="`${base}/images/${img}`" :alt="name" />
          </picture>
          <img
            width="168"
            height="42"
            v-else
            :src="`${base}/images/${img}`"
            :alt="name"
          />
        </a>
        <span>{{ description }}</span>
      </template>
    </template>
  </section>


  <section id="highlights" class="vt-box-container">
    <div class="vt-box">
      <h2><a href="https://gitee.com/chinaiot/iotos" target="_blank" >IoTOS</a></h2>
      <p>
        基于多物联网管理系统API（如:中国移动 oneLink 等）开放能力，集成API管理、数据同步算法 功能。极致高效同步算法、系统构架业务分离。
      </p>
    </div>
    <div class="vt-box">
      <h2><a href="https://gitee.com/chinaiot/iotos-app" target="_blank" >IoTOS-App</a></h2>
      <p>
        基于RuoYi-App 拓展开发 适配国际化多语言。UI 使用 uView 集成PC端常用业务功能（卡信息查询、智能诊断、用量详情、业务办理）。
      </p>
    </div>
    <div class="vt-box">
      <h2><a href="https://gitee.com/chinaiot/iotos-im" target="_blank" > IoTOS-IM</a></h2>
      <p>
        基于 J-IM 架构集成至 IoTOS 与 IoTOS-App 网络通信中间件。（网络通讯后续可拓展为其他协议接入或系统内部聊天等）
      </p>
    </div>
  </section>

<!--  <section id="sponsors">
    <h2>Platinum Sponsors</h2>
    <SponsorsGroup tier="platinum" placement="landing" />
    <h2>Gold Sponsors</h2>
    <SponsorsGroup tier="gold" placement="landing" />
  </section>-->

  <SiteMap />
  <!-- <NewsLetter /> -->
</template>

<style scoped>
section {
  padding: 42px 32px;
}

#hero {
  padding: 26px 32px;
  text-align: center;
}

.tagline {
  font-size: 51px;
  line-height: 1.25;
  font-weight: 900;
  letter-spacing: -1.5px;
  max-width: 960px;
  margin: 0px auto;
}

html:not(.dark) .accent,
.dark .tagline {
  background: -webkit-linear-gradient(315deg, rgb(59, 164, 255) 25%, #E91E63);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.demoA {
  color: white!important;
  background: -webkit-linear-gradient(289deg, rgb(59, 164, 255) 25%, #e91e63c9);
}

.btn1 {
  color: white!important;
  background: #e91e63c9!important;
}

.description {
  max-width: 960px;
  line-height: 1.5;
  color: var(--vt-c-text-2);
  transition: color 0.5s;
  font-size: 22px;
  margin: 24px auto 40px;
}

.actions a {
  font-size: 16px;
  display: inline-block;
  background-color: var(--vt-c-bg-mute);
  padding: 8px 18px;
  font-weight: 500;
  border-radius: 8px;
  transition: background-color 0.5s, color 0.5s;
}

.actions .get-started {
  margin-right: 18px;
}

.actions .icon {
  display: inline;
  position: relative;
  top: -1px;
  margin-left: 2px;
  fill: currentColor;
  transition: transform 0.2s;
}

.actions .get-started:hover {
  transition-duration: 0.2s;
}

.actions .get-started:hover .icon {
  transform: translateX(2px);
}

.actions .get-started,
.actions .setup {
  color: var(--vt-c-text-code);
}

.actions .get-started:hover,
.actions .setup:hover {
  background-color: var(--vt-c-gray-light-4);
  transition-duration: 0.2s;
}

.dark .actions .get-started:hover,
.dark .actions .setup:hover {
  background-color: var(--vt-c-gray-dark-3);
}

#special-sponsor {
  border-top: 1px solid var(--vt-c-divider-light);
  border-bottom: 1px solid var(--vt-c-divider-light);
  padding: 12px 24px;
  display: flex;
  align-items: center;
}

#special-sponsor span {
  color: var(--vt-c-text-2);
  font-weight: 500;
  font-size: 13px;
  vertical-align: middle;
  flex: 1;
}

#special-sponsor span:first-child {
  text-align: center;
}

#special-sponsor a {
  display: flex;
  justify-content: center;
  padding: 0 24px;
}

#special-sponsor img {
  height: 42px;
  margin: -6px 0;
}

.dark #special-sponsor img {
  filter: grayscale(1) invert(1);
}

#highlights {
  max-width: 960px;
  margin: 0px auto;
  color: var(--vt-c-text-2);
}

#highlights h2 {
  font-weight: 600;
  font-size: 20px;
  letter-spacing: -0.4px;
  color: var(--vt-c-text-1);
  transition: color 0.5s;
  margin-bottom: 0.75em;
}

#highlights p {
  font-weight: 400;
  font-size: 15px;
}

#highlights .vt-box {
  background-color: transparent;
}

#sponsors {
  max-width: 900px;
  margin: 0px auto;
}

#sponsors h2 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 1em;
}

#sponsors .sponsor-container {
  margin-bottom: 3em;
}

@media (max-width: 960px) {
  .tagline {
    font-size: 64px;
    letter-spacing: -0.5px;
  }
  .description {
    font-size: 18px;
    margin-bottom: 48px;
  }
}

@media (max-width: 768px) {
  .tagline {
    font-size: 48px;
    letter-spacing: -0.5px;
  }
}

@media (max-width: 576px) {
  #hero {
    padding: 56px 32px;
  }
  .description {
    font-size: 16px;
    margin: 18px 0 30px;
  }
  #special-sponsor {
    flex-direction: column;
  }
  #special-sponsor img {
    height: 36px;
    margin: 8px 0;
  }
  #special-sponsor span {
    text-align: center !important;
  }
  #highlights h3 {
    margin-bottom: 0.6em;
  }
  #highlights .vt-box {
    padding: 20px 36px;
  }
  .actions a {
    margin: 18px 0;
  }
}

@media (max-width: 370px) {
  .tagline {
    font-size: 36px;
  }
}

.lead:hover{
  color: #3ba4ff !important;
}
.sourceCodeGitee{
  margin-right: 18px;
  background-color: #3ba4ff!important;
  color:white!important;
}

.sourceCodeGitHub{
  margin-right: 18px;
  background-color: #1F2328!important;
  color:white!important;
}
</style>
