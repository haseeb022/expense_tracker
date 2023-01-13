// Get the functions in the db.js file to use
const db = require('../services/db');

class Category {
    // ID
    id;
    // name
    name;
    // category array
    categories = [];

    constructor(id = '') {
        this.id = id;
    }

    async getCategories() {
        var sql = "select * from categories";
        const results = await db.query(sql);
        this.categories = results;
    }

    

}

module.exports ={ Category };