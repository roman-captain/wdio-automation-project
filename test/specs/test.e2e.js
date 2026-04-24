import LoginPage from "./../pages/login.page.js"
import MainPage from "./../pages/main.page.js"


describe("Navigation on GitHub.com", () => {

    xit("should sign up github.com", async () => {
        await browser.url('https://github.com');

        await LoginPage.clickOnSignUpButton()
        await browser.pause(1000)
        
        await expect(LoginPage.signUpHeader).toHaveText('Create your free account')
        await browser.pause(1000)

        await LoginPage.inputLoginUpField('example@.com')
        await browser.pause(1000)

        await LoginPage.inputPasswordUpField('Password12345')
        await browser.pause(1000)
        
        await LoginPage.inputUsernameUpField('BraddPitt')
        await browser.pause(1000)
        
        await LoginPage.chooseCountry('Ukraine')
        await browser.pause(1000)
        
        await LoginPage.clickCheckboxEmailLink()
        await browser.pause(1000)

        const createAccount = LoginPage.createAccountButton
        await expect(createAccount).toBeEnabled()
        await expect(createAccount).toBeClickable()
        await createAccount.click()
        await browser.pause(1000)
       
    })  

    xit("should sign in github.com", async () => {
        await browser.url('https://github.com');

        await LoginPage.clickOnSignInButton()
        await browser.pause(1000)
        
        await expect(LoginPage.signInPageTitle).toHaveText('Sign in to GitHub')
        await browser.pause(1000)
        
        await LoginPage.inputLoginInField('example@.com')
        await browser.pause(1000)

        await LoginPage.inputPasswordInField('Password12345')
        await browser.pause(1000)

        await LoginPage.clickLoginSignInButton()
        await browser.pause(1000)

    }) 

    xit("should subscribe in github.com", async () => {
        await browser.url('https://github.com');


        const subBtn = MainPage.subscribeBtn
        await subBtn.scrollIntoView()
        await browser.pause(1000)
        
        await expect(subBtn).toBeDisplayed()
        await expect(subBtn).toBeClickable()
        await subBtn.click()
        await browser.pause(1000)
        
        await expect(MainPage.subscribeHeadTitle).toHaveText('Get our developer newsletter')
        await browser.pause(1000)
        
        await MainPage.inputFieldWorkEmail('example@gmail.com')
        await browser.pause(1000)
       
        await MainPage.selectCountry('Ukraine')
        await browser.pause(3000)

        await MainPage.clickCheckboxPrivacy()
        await browser.pause(1000)
        
        await MainPage.clickOnFinalSubscribeBtn()
        await browser.pause(1000)

        await expect(MainPage.successSubcribeTitle).toHaveText('Thanks for subscribing')
        await browser.pause(1000)
    }) 
    
    xit("should search in github.com", async () => {
        await browser.url('https://github.com');

        await MainPage.clickOnFieldSearch()
        await browser.pause(2000)

        await MainPage.inputFieldRequest('art')
        await browser.pause(1000)

        await browser.keys('Enter')
        await browser.pause(1000)

        const link = await MainPage.firstArtLink
        await expect(link).toExist()

    })

    xit("should check pricing on github.com", async () => {
        await browser.url('https://github.com');

        await MainPage.clickOnPricingBtn()
        await browser.pause(1000)

        await expect(MainPage.pricingHeader).toHaveText('Try the Copilot-powered platform')
        await browser.pause(1000)
        
        await expect(browser).toHaveTitle('Pricing · Plans for every developer · GitHub')

        const compareBtn = MainPage.compareFeaturesLink
        await compareBtn.scrollIntoView()
        await browser.pause(1000)
        
        await compareBtn.click()
        await browser.pause(1000)

        await expect(MainPage.compareFeaturesTitle).toHaveText('Compare features')
        await browser.pause(1000)

    })

    xit("should find support on github.com", async () => {
        await browser.url('https://github.com');

        await LoginPage.clickOnSignUpButton()
        await browser.pause(1000)

        await MainPage.clickOnServiceTermsButton()
        await browser.pause(2000)
        
        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[handles.length - 1])

        await expect(browser).toHaveUrl('https://docs.github.com/ru/site-policy/github-terms/github-terms-of-service')
        await browser.pause(1000)

        const supLink = MainPage.supportLink
        await supLink.scrollIntoView()
        await supLink.click()
        await browser.pause(1000)

        await expect(MainPage.supportTitle).toHaveText('Приветствуем вас в службе поддержки GitHub')
        await browser.pause(1000)
    })     
})