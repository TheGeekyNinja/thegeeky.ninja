<template>
  <div class="pageContent">
    <div v-if="loading">loading...</div>
    <h1 v-if="pageTitle">{{ pageTitle }}</h1>
    <div v-if="pageContent">
    <Markdown :source="pageContent" />
    </div>
    <div v-if="error">{{ error }}</div>
  </div>
</template>

<script>
import { useQuery } from '@vue/apollo-composable'
import Markdown from 'vue3-markdown-it';
import gql from 'graphql-tag'
export default {
  props: ['pageID'],
  setup (props) {
    const { result, loading, error } = useQuery(gql`
      {
        page (id: ${props.pageID}) {
          Content
          Title
        }
      }
    `);
    return {
      result,
      loading,
      error
    };
  },
  computed: {
    pageContent() {
      if (this.result?.page?.Content ) {
        return this.result.page.Content;
      } else {
        return false;
      }
    },
    pageTitle() {
      if (this.result?.page?.Title) {
        return this.result.page.Title;
      } else {
        return false;
      }
    }
  },
  components: {
    Markdown
  }
}
</script>
<style>
</style>