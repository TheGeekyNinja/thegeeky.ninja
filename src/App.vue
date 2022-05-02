<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <Header />
  <Banner />
  <Service />
  <About />
  <Testimonial />
  <Partner />
  <Module />
</template>

<script>
import Header from "./components/Header.vue";
import Banner from "./components/Banner.vue";
import Service from "./components/Service.vue";
import About from "./components/About.vue";
import Testimonial from "./components/Testimonial.vue";
import Partner from "./components/Partner.vue";
import Module from "./components/Module.vue";
export default {
  name: "App",
  components: {
    Header,
    Banner,
    Service,
    About,
    Testimonial,
    Partner,
    Module,
  },
};
</script>

<style>
</style>
