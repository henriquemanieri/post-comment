describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:5173/')
    cy.get("[data-qa='profile-box']")
    cy.get("[data-qa='comment-input']").first().type("Test 123")
    cy.get("[data-qa='publish-button']").first().click()
    cy.get("[data-qa='comment-text']").contains('Test 123')
    cy.get("[data-qa='comment-text']").each(($element, index) => {
      console.log($element.text())
      if ($element.text() === 'Test 123') {
        cy.get($element).siblings("header").children("[data-qa='delete-button']").click()
      }

    })
  })
})

