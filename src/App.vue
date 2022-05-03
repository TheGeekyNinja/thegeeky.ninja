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
  <Newsletter />
  <Blog />
  <Contact />
  <Footer />
</template>

<script>
import Header from "./components/Header.vue";
import Banner from "./components/Banner.vue";
import Service from "./components/Service.vue";
import About from "./components/About.vue";
import Testimonial from "./components/Testimonial.vue";
import Partner from "./components/Partner.vue";
import Module from "./components/Module.vue";
import Blog from "./components/Blog.vue";
import Newsletter from "./components/Newsletter.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";
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
    Blog,
    Newsletter,
    Contact,
    Footer,
  },
};
</script>

<style>
</style>
