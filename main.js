const express = require('express'),
  homeController = require('./controllers/homeControllers'),
  layouts = require('express-ejs-layouts')
app = express();
  
app.set("view engine", "ejs");


app.use(express.urlencoded({
  extended: false
}));
app.use(express.json());

app.set("port", process.env.PORT || 3000);

app.get("/", (req, res) => {
  res.send("Welcome to confetti cuisine!");
});

app.get('/courses', homeController.showCourses);
app.get('/contact', homeController.showSignUp);
app.get('/contact', homeController.postedSignUpForm);

app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
})