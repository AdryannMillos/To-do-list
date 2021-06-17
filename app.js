const express = require("express");
const bodyParser = require("body-parser");
const date = require (__dirname + "/date.js");
const app = express();
let items = ["Buy food", "Cook food", "Eat food"];
let workItems = [];
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get("/", function (req, res){

let day = date();
  res.render("list", {listType: day, newListItems: items});
});

app.post("/", function (req, res){
let item = req.body.newItem;

if(req.body.list === "Work"){
    workItems.push(item);
    res.redirect("/work");
} else {
  items.push(item);
  res.redirect("/")
}


});

app.get("/work", function (req, res){
res.render("list", {listType: "Work List", newListItems: workItems} );
});




app.listen(3000, function(){
  console.log("Server started on port 3000");
});
