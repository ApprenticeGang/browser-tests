const baseUrl = "http://mars-mission-integration.s3-website.eu-west-2.amazonaws.com"

context("The Select Rover Page", () => {
    beforeEach(() => {
        // replace with direct link once 404 is fixed.
        cy.visit(baseUrl)
            .contains("Rover explorer")
            .click();
    });
    
    it("should contain links to rovers and all images", () => {
        // replace with main selector when that exists.
        cy.get("section")
            .contains("Perserverance")
            .invoke("attr", "href")
            .should("eq", "/timeline/perserverance");

        cy.get("section")
            .contains("Oppertunity")
            .invoke("attr", "href")
            .should("eq", "/timeline/oppertunity");

        cy.get("section")
            .contains("Spirit")
            .invoke("attr", "href")
            .should("eq", "/timeline/spirit");

        cy.get("section")
            .contains("Curiosity")
            .invoke("attr", "href")
            .should("eq", "/timeline/curiosity");

        cy.get("section")
            .contains("View All")
            .invoke("attr", "href")
            .should("eq", "/view_all");

    });
});