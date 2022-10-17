import axios from "axios";

const API = import.meta.env.VITE_STRAPI_BASEURL;

const config = { // load config info
  questionApi: "tgn-faqs",
  // blogApi: "blogPosts",
  // contentApi: "vrt-site-content",
}

const dataStructure= {};

// questions, content, blog, etc
const getQuestions = () => {
  if (typeof config.questionApi === "string") {
    const data = returnData(config.questionApi);
    return data;
  } else {
    return "Questions not configured";
  }
}

const returnData = (dataType) => {
  if (typeof dataStructure[dataType] === "object") { // If data is defined/loaded
    return dataStructure[dataType];
  } else {
    return "error: Data unavailable"; // Error message for components to handle
  }
}

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
  Object.values(config).forEach(async (value) => {
    let data = await getData(value);

    if (typeof data === "object") {
      dataStructure[value] = data;
    } // else don't overwrite it when HTTP dies!
  });
}

init();

export { getQuestions };
