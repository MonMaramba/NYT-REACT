import axios from "axios";

export default {
  // Gets all saved headlines
  getHeadlines: function() {
    return axios.get("/api/headlines");
  },
  // Gets the headline with the given id
  getHeadline: function(id) {
    return axios.get("/api/headlines/" + id);
  },
  // Deletes the headline with the given id
  deleteHeadline: function(id) {
    return axios.delete("/api/headlines/" + id);
  },
  // Saves a headline to the database
  saveHeadline: function(headlineData) {
    return axios.post("/api/headlines", headlineData);
  }
  
};