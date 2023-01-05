// Get the functions in the db.js file to use
const db = require('../services/db');
const { Category } = require('./category');

class Expense {
    // ID
    id;
    // category id
    cat_id;
    //amount
    amount;
    // category array
    expenses = [];

    constructor(id = '') {
        this.id = id;
    }

    async getExpenses() {
        var sql = "select c.id, c.name, e.amount from categories as c LEFT JOIN expense as e ON c.id=e.cat_id";
        const results = await db.query(sql);
        this.expenses = results;
    }

    

}

module.exports = { Expense };