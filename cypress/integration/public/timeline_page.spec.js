const baseUrl = "http://mars-mission-integration.s3-website.eu-west-2.amazonaws.com"

context("The Timeline Page", () => {
    beforeEach(() => {
        cy.visit(baseUrl);
    });

    it("exists for Opportunity", () => {
        cy.contains("Opportunity").click();
    });

    it("exists for Spirit", () => {
        cy.contains("Spirit").click();
    });

    it("exists for Curiosity", () => {
        cy.contains("Curiosity").click();
    });

    it("exists for Perseverance", () => {
        cy.contains("Perserverance").click();
    });
});