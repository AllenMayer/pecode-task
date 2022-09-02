/// <reference types="cypress" />

require('dotenv').config()

module.exports = (on, config) => {
  config.env.username = process.env.USERNAME
  config.env.password = process.env.PASSWORD
  return config
}
