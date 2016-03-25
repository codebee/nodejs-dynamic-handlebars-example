module.exports = function(config) {
  var express = require('express');
  var router = express.Router();
  
  /* GET home page. */
  router.get('/', function(req, res) {
    res.render('index', { title: 'Express', name: config.name });
  });


    /* Routes for app form pages*/
  router.get('/app/:pagename', function(req, res){

    var pagename = req.params.pagename;
    
    //Render name-form-lacales handlebars 
    res.render('main-master.handlebars',{
        mainPartial: function() {
             return pagename;
        } 
    });        
  });
  
  return router;
}
