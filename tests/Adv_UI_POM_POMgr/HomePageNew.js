/**
 * 
 * methods:
 *      - async is mandatory with methods declaration
 * 
 * export:
 *      - module.exports = HomePage;   //No curly braces
 * 
 */
class HomePageNew{

    constructor(page){
        this.page = page;
        this.h1TextHomePage = page.locator('text="Automation Testing Practice for QA and Developers"');
        this.loginPageLink = page.locator('text="Test Login Page"');  
        this.registerPageLink = page.locator('text="Test Register Page"');    
        this.searchInput = page.locator("input#search-input");   //tag#id
        this.searchButton = page.locator("button#search-button");   //tag#id
        
    }

    async openBaseURL() {
        await this.page.goto('https://practice.expandtesting.com/');
    }

    async goToLoginPage() {
        await this.loginPageLink.click();
    }

    async goToRegisterPage() {
        await this.registerPageLink.click();
    }

    async getH1Text() {
        await this.h1TextHomePage.isVisible();
        const text = await this.h1TextHomePage.textContent(); 
        return text;
    }
    
    async searchForKeyword(keyword){
        await this.searchInput.fill(keyword); 
        await this.searchButton.click();
    }

    async verifyHomePage() {
        await this.h1TextHomePage.isVisible();  
    }
}

module.exports = HomePageNew;