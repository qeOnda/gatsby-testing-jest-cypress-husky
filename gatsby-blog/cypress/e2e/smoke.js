describe('my website test', () => {
	it('it loads', () => {
		cy.visit('/')
		.contains("Wow")
		.click()
	})
})