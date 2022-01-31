// //<reference types="cypress" />

context('Home Page Shows Content', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Should find the welcome page and message', () => {
    cy.get('h2').contains('Find your source of happiness')
  })

  it('Should see buttons', () => {
    cy.get('button').contains('Register')
    cy.get('button').contains('Login')
  })
})

context('Home page links works', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
})
