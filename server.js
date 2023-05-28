const express = require("express");
const app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('accueil', {nom:"Pipita", 
                           dev:"Développeur web"});
})

app.get('/accueil', function(req, res){
    res.render('accueil', {nom:"Pipita", 
                           dev:"Développeur web"});
})

app.get('/services', function(req, res){
    res.render('services');
})

app.get('/contact', function(req, res){
    res.render('contact');
})


app.listen(9090, function(){
    console.log("Mon serveur(http://localhost:9090)");
})