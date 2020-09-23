context("Site Navigation", () => {
    beforeEach(() => {
        cy.visit("http://mars-mission-integration.s3-website.eu-west-2.amazonaws.com");
    });
    
    describe("at desktop resolution", () => {
        beforeEach(() => {
            cy.viewport('macbook-15');
        });
        
        it("should be always visible", () => {
            cy.get("nav a:visible").should("have.length", 6);
        });
    });
   
    describe("at mobile resolution", () => {
        beforeEach(() => {
            cy.viewport('iphone-x');
        });
       
        it("should be hidden initially", () => {
            cy.get("nav a:visible").should("have.length", 0);
        });
        
        it("should open when you click the hamburger button", () => {
            cy.get('[data-testid="Hamburger Container"] button').click();
            cy.get("nav a:visible").should("have.length", 6);
        });
        
        it("should close when you click the close button", () => {
            cy.get('[data-testid="Hamburger Container"] button').click();
            cy.get("nav a:visible").should("have.length", 6);

            cy.get('[data-testid="Hamburger Container"] button').click();
            cy.get("nav a:visible").should("have.length", 0);
        });
        
        it("should close when you click elsewhere on the page", () => {
            cy.get('[data-testid="Hamburger Container"] button').click();
            cy.get("nav a:visible").should("have.length", 6);

            cy.contains("ENTER MARS").click();
            cy.get("nav a:visible").should("have.length", 0);
        });
    });
});