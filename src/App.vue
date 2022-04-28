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
  <Blog />
  <Calltoaction />
  <Contact />
  <Footer />
  <Copyright />
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
import Blog from "./components/Blog.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";
import Copyright from "./components/Copyright.vue";
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
    Blog,
    Contact,
    Footer,
    Copyright,
  },
};
</script>

<style>
</style>
