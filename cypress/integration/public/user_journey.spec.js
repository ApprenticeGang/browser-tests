const baseUrl = "http://mars-mission-integration.s3-website.eu-west-2.amazonaws.com"

context("User Journeys", () => {
    it("To find rover images", () => {
        cy.visit(baseUrl);
        
        cy.contains("ENTER MARS").click();
        cy.url().should('eq', `${baseUrl}/rover_explorer`);
        
        cy.get("section").contains("Spirit").click();
        cy.url().should('eq', `${baseUrl}/timeline/spirit`);
    });
});
