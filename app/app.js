// Import express.js
const express = require("express");

//example to add more functions
// const { categoryView, categoryAdd} = require("./controllers/categoryController");
const { categoryView, categorycreate} = require("./controllers/categoryController");
const { dashboardView } = require("./controllers/dashboardController");
const { expenseView, expensecreate, editexpense } = require("./controllers/expenseController");


// Create express app
var app = express();
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'pug');
app.set('views', './app/views');

// Add static files location
app.use(express.static("static"));

// Get the functions in the db.js file to use
const db = require('./services/db');

app.get('/', dashboardView);
app.get('/categories', categoryView);
app.get('/expenses', expenseView);
app.post('/createexpense', expensecreate);
app.post('/editexpense', editexpense);

// Create a route for root - /
// app.get("/", async function(req, res) {
//     var dashboard = new Dashboard();
//     await dashboard.getStatistics();
//     res.render("index", {'title': 'Dashboard', 'active_nav': 'dashboard', categories: dashboard.statistics});
//     // sql = 'select c.name,c.background_color, SUM(e.amount) as amount from categories as c LEFT JOIN expense as e ON c.id=e.cat_id GROUP BY c.id';
//     // db.query(sql).then(results => {
//     //     // console.log(results);
//     //     res.render("index", {'title': 'Dashboard', 'active_nav': 'dashboard', categories: results});
//     // });
// });

// app.get("/expenses", async function(req, res) {
//     var expense = new Expense();
//     await expense.getExpenses();
//     res.render("expenses", {'title': 'Expenses', 'active_nav': 'expenses', expenses: expense.expenses});
//     // res.render('expenses');
//     // sql = 'select c.id, c.name, e.amount from categories as c LEFT JOIN expense as e ON c.id=e.cat_id';
//     // db.query(sql).then(results => {
//     //     res.render("expenses", {'title': 'Expenses', 'active_nav': 'expenses', expenses: results});
//     // });
// });

// app.get("/categories", async function(req, res) {
//     var category = new Category();
//     await category.getCategories();
//     res.render("categories", {'title': 'Categories', 'active_nav': 'categories', categories: category.categories});
//     // sql = 'select * from categories';
//     // db.query(sql).then(results => {
//     // // res.render('expenses');
//     //     res.render("categories", {'title': 'Categories', 'active_nav': 'categories', categories: results});
//     // });
// });


// // Create a route for testing the db
// app.get("/all_students", function(req, res) {
//     // Assumes a table called test_table exists in your database
//     sql = 'select * from test_table';
//     db.query(sql).then(results => {
//         res.render('index.pug', {data1: results});
//     });
// });

// // Task 1 JSON formatted listing of students
// app.get("/all-students", function(req, res) {
//     var sql = 'select * from Students';
//     // As we are not inside an async function we cannot use await
//     // So we use .then syntax to ensure that we wait until the 
//     // promise returned by the async function is resolved before we proceed
//     db.query(sql).then(results => {
//         console.log(results);
//         res.json(results);
//     });

// });

// Task 2 display a formatted list of students
// app.get("/all-students-formatted", function(req, res) {
//     var sql = 'select * from Students';
//     db.query(sql).then(results => {
//     	    // Send the results rows to the all-students template
//     	    // The rows will be in a variable called data
//         res.render('all-students', {data: results});
//     });
// });

// Single student page.  Show the students name, course and modules
// app.get("/student-single/:id", async function (req, res) {
//     var stId = req.params.id;
//     var student = new Student(stId);
//     await student.getStudentName();
//     await student.getStudentProgramme();
//     await student.getStudentModules();
//     console.log(student);
//     res.render('student', {student: student});

//     // console.log(stId);
//     // Query to get the required results from the students table.  
//     // We need this to get the programme code for this student.
//     // var stSql = "SELECT s.name as student, ps.name as programme, \
//     // ps.id as pcode from Students s \
//     // JOIN Student_Programme sp on sp.id = s.id \
//     // JOIN Programmes ps on ps.id = sp.programme \
//     // WHERE s.id = ?";

//     // var stResult = await db.query(stSql, [stId]);
//     // console.log(stResult);
//     // var pCode = stResult[0]['pcode'];
    
//     // Get the modules for this student using the programme code from 
//     // the query above
//     // var modSql = "SELECT * FROM Programme_Modules pm \
//     // JOIN Modules m on m.code = pm.module \
//     // WHERE programme = ?";

//     // var modResult = await db.query(modSql, [pCode]);
//     // console.log(modResult);

//     // Send directly to the browser for now as a simple concatenation of strings
//     // res.send(JSON.stringify(stResult) + JSON.stringify(modResult));
//     });



// // JSON output of all programmes
// app.get("/all-programmes", function(req, res) {
//     var sql = 'select * from Programmes';
//     // As we are not inside an async function we cannot use await
//     // So we use .then syntax to ensure that we wait until the 
//     // promise returned by the async function is resolved before we proceed
//     db.query(sql).then(results => {
//         console.log(results);
//         res.json(results);
//     });

// });

// // Single programme page (no formatting or template)
// app.get("/programme-single/:id", async function (req, res) {
//     var pCode = req.params.id;
//     var pSql = "SELECT * FROM Programmes WHERE id = ?";
//     var results = await db.query(pSql, [pCode]);
//     //Now call the database for the modules
//     //Why do you think that the word modules is coming in before the name of the programme??
//     var modSql = "SELECT * FROM Programme_Modules pm \
//     JOIN Modules m on m.code = pm.module \
//     WHERE programme = ?";
//     var modResults = await db.query(modSql, [pCode]);
//     // String the results together, just for now.  Later we will push this
//     // through the template
//     res.send(JSON.stringify(results) + JSON.stringify(modResults));  
// });

// app.post('/add-note', async function (req, res) {
//     params = req.body;
//     // Adding a try/catch block which will be useful later when we add to the database
//     var student = new Student(params.id);
//     try {
//          await student.addStudentNote(params.note);
//          res.send('form submitted');
//         }
//      catch (err) {
//          console.error(`Error while adding note `, err.message);
//      }
//      // Just a little output for now
//      res.send('form submitted');

// });


// // Create a route for testing the db
// app.get("/db_test", function(req, res) {
//     // Assumes a table called test_table exists in your database
//     sql = 'select * from test_table';
//     db.query(sql).then(results => {
//         console.log(results);
//         res.send(results)
//     });
// });


// app.get("/goodbye", function(req, res) {
//     res.send("Goodbye world!");
// });

// // Create a route for /goodbye
// // Responds to a 'GET' request
// app.get("/goodbye", function(req, res) {
//     res.send("Goodbye world!");
// });

// // Create a dynamic route for /hello/<name>, where name is any value provided by user
// // At the end of the URL
// // Responds to a 'GET' request
// app.get("/hello/:name", function(req, res) {
//     // req.params contains any parameters in the request
//     // We can examine it in the console for debugging purposes
//     console.log(req.params);
//     //  Retrieve the 'name' parameter and use it in a dynamically generated page
//     res.send("Hello " + req.params.name);
// });

// Start server on port 3000
app.listen(3000,function(){
    console.log(`Server running at http://127.0.0.1:3000/`);
});