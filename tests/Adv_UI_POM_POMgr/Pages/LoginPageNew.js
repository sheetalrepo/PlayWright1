/**
 * 
 * methods:
 *      - async is mandatory with methods declaration
 * 
 * export:
 *      - module.exports = LoginPage;   //No curly braces
 * 
 */
class LoginPageNew{

    constructor(page){
        this.page = page;
        this.h1TextLoginPage = page.locator('text="Test Login page for Automation Testing Practice"');
        this.username = page.locator('input#username');
        this.password = page.locator('#password');
        this.submitButton = page.locator("[type='submit']");
        this.successMessage = page.locator('text="You logged into a secure area!"');
        this.successNewRegistrationMessage = page.locator('text="Successfully registered, you can log in now."');
        
    }

    async loginWithUserPassword(uName, password){
        await this.username.fill(uName);     
        await this.password.fill(password);
        await this.submitButton.click();

        //Verification & Return Text
        await this.successMessage.isVisible();
        const text = await this.successMessage.textContent(); 
        return text;
    }

    async verifyLoginPage() {
        await this.h1TextLoginPage.isVisible();  
    }

    //User comes to Login page after successful registration
    async verifyNewRegistrationMessage() {
        await this.successNewRegistrationMessage.isVisible();  
    }
}

module.exports = LoginPageNew;