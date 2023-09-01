describe('login', () => {
  it('passes', () => {

    cy.visit('http://localhost:4200/')

    const name = 'Mahsa Vania Salsabilla'
    let password = 'type-your password'
    
    cy.get('[data-cy="input-name"]').type(name);
    cy.wait(500)
    cy.get('[data-cy="input-password"]').type(password)
    cy.wait(500)
    cy.get('[data-cy="btn-login"]').click();
    cy.wait(500)
    // cy.get('.p-4')

  // });

//    it('fail', () => {

//     cy.visit('http://localhost:4200/')

//     cy.get('[data-cy="input-name"]').type('')
//     cy.wait(500)
//     cy.get('[data-cy="input-password"]').type('');
//     cy.wait(500)
//     cy.get('[data-cy="btn-login"]').click();
//     cy.wait(500)
//     cy.get('.p-4').should('not.be.visible');

//    })
// });

// describe('home', () => {
//   it('passes', () => {
    cy.get('.flex > :nth-child(1) > .card-body').should('be.visible');
    cy.wait(500)
    cy.get(':nth-child(1) > .card-body > [data-cy="btn-add-menu-item-to-cart"]').click();
    cy.wait(500)
    cy.get('.card-body > .h-full > :nth-child(1)').should('be.visible');
    cy.wait(500)
    cy.get(':nth-child(2) > .card-body').should('be.visible');
    cy.wait(500)
    cy.get(':nth-child(2) > .card-body > [data-cy="btn-add-menu-item-to-cart"]').click();
    cy.wait(500)
    cy.get('.h-full > :nth-child(2)').should('be.visible');
    cy.wait(500)
    cy.get(':nth-child(3) > .card-body').should('be.visible');
    cy.wait(500)
    cy.get(':nth-child(3) > .card-body > [data-cy="btn-add-menu-item-to-cart"]').click();
    cy.wait(500)
    cy.get('.h-full > :nth-child(3)').should('be.visible')
    cy.wait(500)
    cy.get(':nth-child(4) > .card-body').should('be.visible');
    cy.wait(500)
    cy.get(':nth-child(4) > .card-body > [data-cy="btn-add-menu-item-to-cart"]').click();
    cy.wait(500)
    cy.get('.h-full > :nth-child(4)').should('be.visible');
    cy.wait(500)
    cy.get('[data-cy="btn-checkout"]').click();
    cy.contains('Items Purchased');
    cy.wait(500)
    cy.get('.card-body > .h-full').scrollIntoView();
    cy.wait(500)
    cy.get('.card-body > .h-full').should('be.visible');
    cy.wait(500)
    cy.get('[data-cy="btn-logout"]').click();
    cy.wait(500)
    cy.get('.hero')

  });
});
// });
// });
