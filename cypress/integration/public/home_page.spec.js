﻿﻿﻿context("The Home Page", () => {
    beforeEach(() => {
        cy.visit("http://mars-mission-integration.s3-website.eu-west-2.amazonaws.com");
    });
    
    it("should contain the enter mars link", () => {
        cy.contains("ENTER MARS");
    });
    
    it("should contain the news section", () => {
        cy.get("h2").contains("News");
        // add tag so that we can check for articles too.
    });
});