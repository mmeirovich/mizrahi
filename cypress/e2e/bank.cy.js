/// <reference types="cypress" />

describe("log in to the fucking bank", () => {
  beforeEach(() => {
    cy.visit("https://www.mizrahi-tefahot.co.il/");
  });

  it("displays two todo items by default", () => {
    cy.get("span").contains("כניסה לחשבון").click();
    cy.get("iframe", { timeout: 30000 }).should("be.visible");
    cy.get("iframe").then(($iframe) => {
      const $body = $iframe.contents().find("body", { timeout: 30000 });
      // cy.wrap($body, { timeout: 30000 });
      cy.wrap($body, { timeout: 30000 })
        .find('input[id="input_user"]', { timeout: 30000 })
        .type(Cypress.env("usr"));
      cy.wrap($body, { timeout: 30000 })
        .find('input[name="password_he"]', { timeout: 30000 })
        .type(Cypress.env("pwd"));

      cy.wrap($body, { timeout: 30000 })
        .find("כניסה לחשבון", { timeout: 30000 })
        .click();
      cy.wait("*/keepAlive").then((interception) => {
        cy.log("gettting server id");
        const serverId = interception.response.headers["Skyserid"];
        cy.log(serverId);
        // assert.isNotNull(interception.response.body, '1st API call has data')
      });
    });
  });
});
