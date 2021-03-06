//import the controller folder (automatically calls the index.js file)
var controllers = require('./controllers'); 
var mid = require('./middleware');

var router = function(app) {

    app.get("/login", mid.requiresSecure, mid.requiresLogout, controllers.Account.loginPage); 
    app.post("/login", mid.requiresSecure, mid.requiresLogout, controllers.Account.login); 
    app.get("/signup", mid.requiresSecure, mid.requiresLogout, controllers.Account.signupPage);
    app.post("/signup", mid.requiresSecure, mid.requiresLogout, controllers.Account.signup);
    app.get("/logout", mid.requiresLogin, controllers.Account.logout);
    app.get("/maker", mid.requiresLogin, controllers.Vol.makerPage);
    app.post("/maker", mid.requiresLogin,  controllers.Vol.make);
    app.get("/volmaker", mid.requiresLogin, controllers.Vol.makerPage);
    app.post("/volmaker", mid.requiresLogin,  controllers.Vol.make);
    app.post("/crew", mid.requiresLogin,  controllers.Crew.make);
    app.get("/crew", mid.requiresLogin, controllers.Crew.makerPage);
    app.get("/volunteer", mid.requiresLogin,  controllers.Vol.volunteerPage);
    app.get("/", mid.requiresSecure, controllers.Account.loginPage);
};

module.exports = router; 