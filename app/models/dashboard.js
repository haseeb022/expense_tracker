// Get the functions in the db.js file to use
const db = require('../services/db');

class Dashboard {
    // statistics array
    statistics = [];

    constructor() {
        this.statistics = [];
    }

    async getStatistics() {
        var sql = "select c.name,c.background_color, SUM(e.amount) as amount from categories as c LEFT JOIN expense as e ON c.id=e.cat_id GROUP BY c.id";
        const results = await db.query(sql);
        this.statistics = results;
    }

    

}

module.exports = Dashboard;