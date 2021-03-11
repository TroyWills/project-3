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
    //   // Deletes the book with the given id
    //   deleteBook: function(id) {
    //     return axios.delete("/api/books/" + id);
    //   },
    //   // Saves a book to the database
    //   saveBook: function(bookData) {
    //     return axios.post("/api/books", bookData);
    //   }
};