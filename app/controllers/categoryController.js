// Get the functions in the db.js file to use
const db = require('../services/db');
const { Category } = require("../models/category");


categoryView = async (req, res) => {
    var category_data = new Category();
    await category_data.getCategories();
    res.render("categories", {'title': 'Categories', 'active_nav': 'categories', categories: category_data.categories});
}












module.exports =  {
    categoryView
};