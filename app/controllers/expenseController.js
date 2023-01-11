// Get the functions in the db.js file to use
const db = require('../services/db');
const { Expense } = require("../models/expense");
const { Category } = require("../models/category");

expenseView = async (req, res) => {
    var category_data = new Category();
    await category_data.getCategories();

    var expense_data = new Expense();
    await expense_data.getExpenses();

    res.render("expenses", {'title': 'Expenses', 'active_nav': 'expenses', expenses: expense_data.expenses, categories: category_data.categories});

}








module.exports =  {
    expenseView
};