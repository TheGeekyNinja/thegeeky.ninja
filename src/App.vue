<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <Header />
  <Banner />
  <About />
  <Video />
  <Service />
</template>

<script>
import Header from "./components/Header.vue";
import Banner from "./components/Banner.vue";
import About from "./components/About.vue";
import Video from "./components/Video.vue";
import Service from "./components/Service.vue";
export default {
  name: "App",
  components: {
    Header,
    Banner,
    About,
    Video,
    Service,
  },
};
</script>

<style>
</style>
