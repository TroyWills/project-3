import axios from "axios";

export default {
    // Gets all the groceries
    getGroceries: function () {
        return axios.get("/api/grocery");
    },

    // Gets the groceries that match a category
    getGroceriesByCategory: function (category) {
        return axios.get("/api/grocery/" + category);
    },

    // Deletes the grocery with the given id
    deleteItem: function(id) {
        return axios.delete("/api/grocery/" + id);
    },
};