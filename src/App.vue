<template>
  <Header />
  <PageContent pageID=1 />
</template>

<script>
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { provide } from 'vue'
import Header from "./components/Header.vue";
import PageContent from "./components/PageContent.vue";
// import Footer from "./components/Footer.vue";

const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: 'https://backend.thegeeky.ninja/graphql',
})

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})
export default {
  name: "App",
  setup () {
    provide(DefaultApolloClient, apolloClient)
  },
  components: {
    Header,
    PageContent,
  },
};
</script>

<style>
</style>