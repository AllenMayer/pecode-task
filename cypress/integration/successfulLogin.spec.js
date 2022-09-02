/// <reference types="Cypress" />

import LoginPage from '../support/pageObjects/LoginPage'

const loginPage = new LoginPage()

describe('successful login', () => {
    it('should log in successfully', () => {
        loginPage.visit()
        loginPage.logIn()
        loginPage.checkSuccessfulLogin()
    })
})