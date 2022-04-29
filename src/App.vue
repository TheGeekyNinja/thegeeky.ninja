<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <Header />
  <Banner />
  <Service />
</template>

<script>
import Header from "./components/Header.vue";
import Banner from "./components/Banner.vue";
import Service from "./components/Service.vue";
export default {
  name: "App",
  components: {
    Header,
    Banner,
    Service,
  },
};
</script>

<style>
</style>
