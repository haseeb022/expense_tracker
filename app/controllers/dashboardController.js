// Get the functions in the db.js file to use
const db = require('../services/db');
const Dashboard = require("../models/dashboard");

dashboardView = async (req, res) => {
    var dashboard_data = new Dashboard();
    await dashboard_data.getStatistics();
    res.render("index", {'title': 'Dashboard', 'active_nav': 'dashboard', categories: dashboard_data.statistics});
}








module.exports =  {
    dashboardView
};