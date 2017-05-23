var express = require('express');
var chalk = require('chalk');
var fetch = require('node-fetch');
var exphbs  = require('express-handlebars');
var app = express();

//  Setup templating
app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');

//  Static files
app.use('/public', express.static('public'));

//  Routing
app.use('/', function(req, res){
  //  We need an access token for github
  //  so bail if we do not have one
  if(!req.query.token) {
    return res.render('error', {layout: false});
  }

  //  Get data
  fetch(`https://api.github.com/user/repos?access_token=${req.query.token}`)
    .then(function(res){ return res.json(); })
    .then(function(repos){
      //  Repos has LOTS of data,
      //  you should inspect this to see what you have to play with
      res.render('index',{
        layout: false,
        repos: repos
      });
    })
    .catch(function(err){
      //  This should throw anything that goes wrong
      //  should show as red in your terminal
      console.log(chalk.red(err));
    });

});

//  Start a server
var port = (process.env.PORT || 3000);
app.listen(port, function(){
  //  Confirm the server has started
  console.log(chalk.green(`server started on ${port}`));
});
