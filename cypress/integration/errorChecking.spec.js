/// <reference types="Cypress" />

import LoginPage from '../support/pageObjects/LoginPage'

const loginPage = new LoginPage()

describe('error checking', () => {
    it('should check all elements for presence', () => {
        loginPage.visit()
        loginPage.checkUsernameInputForPresence()
        loginPage.checkPasswordInputForPresence()
        loginPage.checkSubmitBtnForPresence()
    })

    it('should check empty username error message', () => {
        loginPage.fillPassword().submit()
        loginPage.checkEmptyUsernameError()
    })

    it('should check empty password error message', () => {
        loginPage.fillUsername().submit()
        loginPage.checkEmptyPasswordError()
    })

    it('should check unsuccessful login error message', () => {
        loginPage.fillPassword().submit()
        loginPage.checkNoAccountError()
    })
})