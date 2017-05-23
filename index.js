var express = require('express');
var chalk = require('chalk');
var exphbs  = require('express-handlebars');
var app = express();

//  Setup templating
app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');

//  Static files
app.use('/public', express.static('public'));

//  Routing
app.use('/', function(req, res){
  res.render('index', {layout: false});
});

//  Start a server
var port = (process.env.PORT || 3000);
app.listen(port, function(){
  //  Confirm the server has started
  console.log(chalk.green(`server started on ${port}`));
});
