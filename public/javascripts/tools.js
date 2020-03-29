var axios = require("axios");

module.exports = {
  getAll: async function(ressource) {
    let data;
    console.log("GET: " + ressource);
    try {
      let response = await axios.get("/" + ressource);
      let pages = response.data.info.pages;
      data = response.data.results;
      while (pages != 1) {
        try {
          response = await axios.get("/" + ressource + "/?page=" + pages);
          data = data.concat(response.data.results);
        } catch (error) {
          console.log(error);
        }
        pages--;
      }
    } catch (error) {
      console.log(error);
    }
    return data;
  }
};
