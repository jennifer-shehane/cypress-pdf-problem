describe('Save pdf dialog pops up', () => {

    beforeEach(() => {
        cy.visit('index.html')
    })

    it('Test', () => {
        cy.contains('Hello world!')
    })
})
