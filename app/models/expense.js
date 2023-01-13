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
        var sql = "select c.id, c.name, e.amount, e.id as expense_id from categories as c LEFT JOIN expense as e ON c.id=e.cat_id";
        const results = await db.query(sql);
        this.expenses = results;
    }

    async createexpense(postrequest) {
        var sql = "insert into expense(cat_id, amount) values(?, ?)";
        const result = await db.query(sql, [postrequest.category, postrequest.amount]);
        return result;
        //var sql = "select c.id, c.name, e.amount from categories as c LEFT JOIN expense as e ON c.id=e.cat_id";
        //const results = await db.query(sql);
        //this.expenses = results;
    }
    async editexpense(postrequest) {
        console.log(postrequest)
        var sql = "update expense set amount=? where id=?";
        const result = await db.query(sql, [postrequest.amount, postrequest.expense_id]);
        return result;
        //var sql = "insert into expense(cat_id, amount) values(?, ?)";
        //const result = await db.query(sql, [postrequest.category, postrequest.amount]);
        //return result;
    }
    
    

}

module.exports = { Expense };