const axios = require("axios");

const fetchDataFromGithub = async (url, params) => {
  try {
    const response = await axios.get(url, { params });

    return response.data;
  } catch (error) {
    console.error(err.message);
    throw new Error("oops");
  }
};

module.exports = { fetchDataFromGithub };
