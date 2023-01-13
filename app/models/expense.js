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

    expense_status=false;

    constructor(id = '') {
        this.id = id;
    }

    async getExpenses() {
        var sql = "select c.id, c.name, e.amount, e.id as expense_id from categories as c JOIN expense as e ON c.id=e.cat_id";
        const results = await db.query(sql);
        this.expenses = results;
    }

    
    async deleteExpense() {
        var sql = "DELETE FROM expense WHERE id = ?";
        const results = await db.query(sql, [this.id]);
        this.expense_status = true;
    }

    

}

module.exports = { Expense };