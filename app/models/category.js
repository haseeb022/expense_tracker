// Get the functions in the db.js file to use
const db = require('../services/db');

class Category {
    // ID
    id;
    // name
    name;
    // category array
    categories = [];

    cat_status = false;

    constructor(id = '') {
        this.id = id;
    }

    async getCategories() {
        var sql = "select * from categories";
        const results = await db.query(sql);
        this.categories = results;
    }

    async deleteCategory() {
        var sql = "select COUNT(id) as total_expense from expense where cat_id = ?";
        const results = await db.query(sql, [this.id]);
        if(results < 1)
        {
            var sql = "DELETE FROM categories WHERE id = ?";
            const results = await db.query(sql, [this.id]);
            this.cat_status = true;
        }
    }

    

}

module.exports ={ Category };