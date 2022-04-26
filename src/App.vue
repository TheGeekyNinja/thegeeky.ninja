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
  <Benifit />
  <Testimonial />
  <calltoaction />
</template>

<script>
import Header from "./components/Header.vue";
import Banner from "./components/Banner.vue";
import About from "./components/About.vue";
import Video from "./components/Video.vue";
import Service from "./components/Service.vue";
import Benifit from "./components/Benifit.vue";
import Testimonial from "./components/Testimonial.vue";
import Calltoaction from "./components/Calltoaction.vue";
export default {
  name: "App",
  components: {
    Header,
    Banner,
    About,
    Video,
    Service,
    Benifit,
    Testimonial,
    Calltoaction,
  },
};
</script>

<style>
</style>
