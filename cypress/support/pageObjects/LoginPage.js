class LoginPage {
    username = Cypress.env('username')
    password = Cypress.env('password')

    usernameInput = '[name="username"]'
    passwordInput = '[name="password"]'
    submitButton = '[type="submit"]'

    emptyUsernameError = 'Please enter username.'
    emptyPasswordError = 'Please enter your password.'
    noAccountError = 'No account found with that username.'

    visit = () => cy.visit('/')

    getUsernameInput = () => cy.get(this.usernameInput)
    getPasswordInput = () => cy.get(this.passwordInput)
    getSubmitBtn = () => cy.get(this.submitButton)

    fillUsername = () => { this.getUsernameInput().type(this.username); return this }
    fillPassword = () => { this.getPasswordInput().type(this.password); return this }
    submit = () => this.getSubmitBtn().click()

    checkUsernameInputForPresence = () => this.getUsernameInput().should('exist')
    checkPasswordInputForPresence = () => this.getPasswordInput().should('exist')
    checkSubmitBtnForPresence = () => this.getSubmitBtn().should('exist')

    logIn = () => this.fillUsername().fillPassword().submit()

    checkSuccessfulLogin = () => cy.contains('AQA internship Login').should('not.exist')

    checkSpanErrorMessage = (element, errorMessage) => element.next('span')
        .should('exist').and('contain.text', errorMessage)


    checkEmptyUsernameError = () => this.checkSpanErrorMessage(this.getUsernameInput(), this.emptyUsernameError)

    checkEmptyPasswordError = () => this.checkSpanErrorMessage(this.getPasswordInput(), this.emptyPasswordError)

    checkNoAccountError = () => this.checkSpanErrorMessage(this.getUsernameInput(), this.noAccountError)
}

export default LoginPage