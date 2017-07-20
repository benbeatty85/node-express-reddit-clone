var express = require('express');


module.exports = function(myReddit) {
    var authController = express.Router();
    
    authController.get('/login', function(request, response) {
        response.render('login-form');
    });
    
    authController.post('/login', function(request, response) {
        //response.render('login-form');
    });
    
    authController.get('/signup', function(request, response) {
        response.render('signup-form');
    });
    
    authController.post('/signup', function(request, response) {
        myReddit.createUser(request.body)
        .then (myReddit.createUser.response)
        .then (response.redirect('/auth/login'));
    });
    
    return authController;
}

