class MainPage {

    //subscribe test
    get subscribeBtn() { return $('a[href="https://github.com/newsletter"]') }
    get subscribeHeadTitle() { return $('h1=Get our developer newsletter') }
    get fieldWorkEmail() { return $('#form-field-emailAddress') }
    get fieldCountry() { return $('#form-field-country') }
    get checkboxPrivacy() { return $('[viewBox="0 0 100 100"]')}
    get successSubcribeTitle() { return $('#hero-section-brand-heading')}
    get finalSubscribeBtn() { return $('.Primer_Brand__Button-module__Button__text___Z3ocU')}
    
   
    async inputFieldWorkEmail(value) {
        await this.fieldWorkEmail.setValue(value)
    }

    async selectCountry(countryName) {
        const select = await this.fieldCountry
        await select.waitForDisplayed()
        await select.selectByVisibleText(countryName)
    }
    async clickCheckboxPrivacy() {
        await this.checkboxPrivacy.click()
    }
    async clickOnFinalSubscribeBtn() {
        await this.finalSubscribeBtn.click()
    }

    //search test
    get fieldSearch() { return $('button.header-search-button') }
    get fieldRequest() { return $('#query-builder-test')}
    get firstArtLink() { return $('*=art')}

    async clickOnFieldSearch() {
        await this.fieldSearch.click()
    }
    async inputFieldRequest(value) {
        await this.fieldRequest.setValue(value)
    }

    //pricing test
    get pricingBtn() { return $('span=Pricing') }
    get pricingHeader() { return $('h1.h2-mktg')}
    get compareFeaturesLink() { return $('a[href="#compare-features"]')}
    get compareFeaturesTitle() { return $('h1.h1')}

    async clickOnPricingBtn() {
        await this.pricingBtn.click()
    }

    //support test
    get serviceTermsButton() { return $('a[href="/site/terms"]')}
    get supportLink() { return $('a[href="https://support.github.com/"]')}
    get supportTitle() { return $('h2[class*="Heading-module__Heading"]')}

    async clickOnServiceTermsButton() {
        await this.serviceTermsButton.click()
    }

}
export default new MainPage()