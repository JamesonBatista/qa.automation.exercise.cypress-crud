import { faker, clone, crudStorage } from "../support/e2e";
describe("API Exercice", () => {
  it("API Testing", () => {
    cy.crud("qa_exercise");
  });
});
