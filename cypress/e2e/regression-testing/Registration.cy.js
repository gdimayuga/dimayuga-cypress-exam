const { generateRegistrationData } = require("../../support/data")

describe('HTD Batch 19 - Cypress Individual Technical Exam', { testIsolation: false }, () => {
  const data = generateRegistrationData()
  const data2 = generateRegistrationData()

  beforeEach(() => {
    cy.visit('/')
  })

  it('Verify user registration works for both Quiz Master and Regular User roles', () => {
    cy.get('.border').click()
    cy.get('#username').type(data.username)
    cy.get('#email').type(data.email)
    cy.get('#password').type(data.password)
    cy.get('#confirmPassword').type(data.password)
    cy.get(':nth-child(6) > .w-full').click()
    cy.contains("Don't have an account? Register").click()
    cy.get('#username').type(data2.username)
    cy.get('#email').type(data2.email)
    cy.get('#password').type(data2.password)
    cy.get('#confirmPassword').type(data2.password)
    cy.get('#role-quiz-master').click()
    cy.get(':nth-child(6) > .w-full').click()
  })

  it('Verify newly created account can successfully log in and access appropriate URL', () => {
    cy.contains("Log In").click()
    cy.get('[data-testid="input-username"]').type(data.username)
    cy.get('[data-testid="input-password"]').type(data.password)
    cy.get('[data-testid="login-button"]').click()
    cy.get('.space-x-4 > .text-gray-500').click()
    cy.get('[data-testid="input-username"]').type(data2.username)
    cy.get('[data-testid="input-password"]').type(data2.password)
    cy.get('[data-testid="login-button"]').click()
  })
})