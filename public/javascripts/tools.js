var axios = require("axios");

module.exports = {
  // GET all pages from ressource
  getAll: async function(ressource) {
    let data;
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
  },

  // GET ressource from single ID
  getbyId: async function(ressource, id) {
    let data;
    try {
      let response = await axios.get("/" + ressource + "/" + id);
      data = response.data;
    } catch (error) {
      console.log(error);
    }
    return data;
  },

  // GET ressource from multiple ID
  getbymultipleId: async function(ressource, ids) {
    let data;
    try {
      let response = await axios.get("/" + ressource + "/" + ids.toString());
      data = response.data;
    } catch (error) {
      console.log(error);
    }
    return data;
  },

  // ID from url
  getIds: function(urls) {
    let id_array = [];
    let id = "";
    urls.forEach(url => {
      try {
        id = url.match(/\/(\d+)+[\/]?/)[1];
      } catch (error) {
        console.log(error);
      }
      id_array.push(id);
    });
    return id_array;
  }
};
