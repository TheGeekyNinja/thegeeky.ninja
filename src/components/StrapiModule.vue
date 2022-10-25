<script setup>
import axios from "axios";
import { computed, ref } from 'vue';

const API = import.meta.env.VITE_STRAPI_BASEURL;

const config = { // load config info
  questionApi: "vegan-robs-faqs?pagination%5BpageSize%5D=100",
  blogApi: "vrt-blogs",
  // contentApi: "vrt-site-content",
}

const props = defineProps({
  content: String
});

const dataStructure = ref({});

// // questions, content, blog, etc
// const getQuestions = () => {
//   if (typeof config.questionApi === "string") {
//     const data = returnData(config.questionApi);
//     return data;
//   }
// }

// const returnData = (dataType) => {
//   if (typeof dataStructure.value[dataType] === "object") { // If data is defined/loaded
//     return dataStructure.value[dataType];
//   }
// }

const getData = async (dataType) => {
  try {
    const response = await axios.get(API + dataType);
    return response.data.data;
  } catch (error) {
    console.log(error)
  }
}

const init = async () => {
  // Checks config and loads data
  for (const i in config) {
    const value = config[i];
    
    let data = await getData(value);

    if (typeof data === "object") {
      dataStructure.value[i] = data;
    } // else don't overwrite it when HTTP dies!
  }
}

const emit = defineEmits(['data']);

const itemsLoaded = computed(async () => {
  await init();

  emit('data', dataStructure.value[props.content]);
})
</script>

<template>
  <div v-if="itemsLoaded">
  </div>
</template>
