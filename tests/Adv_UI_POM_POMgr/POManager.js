const HomePageNew = require('./HomePageNew.js');
const LoginPageNew = require('./LoginPageNew.js');
const RegisterPageNew = require('./RegisterPageNew.js');

class POManager{

    constructor(page){
        this.page = page;
        this.homePageNew = new HomePageNew(this.page)
        this.loginPageNew = new LoginPageNew(this.page)
        this.registerPageNew = new RegisterPageNew(this.page)
    }

    getHomePageNew(){
        return this.homePageNew;
    }

    getLoginPageNew(){
        return this.loginPageNew;
    }

    getRegisterPageNew(){
        return this.registerPageNew;
    }

}

module.exports = POManager;