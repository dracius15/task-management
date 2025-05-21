describe('Task Management', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    cy.window().then((win) => {
      win.localStorage.clear();
    });
    
    // Visit the dashboard
    cy.visit('/user/dashboard');
  });

  it('creates a new task with documents', () => {
    // Create a task
    cy.get('input[placeholder="Add new task"]').type('Test Task with Documents');
    
    // Upload a document
    cy.get('input[type="file"]').attachFile('test.pdf');
    
    // Submit the form
    cy.get('button').contains('Add Task').click();
    
    // Verify task was created
    cy.contains('Test Task with Documents').should('be.visible');
    
    // Verify document was attached
    cy.contains('Documents:').should('be.visible');
    cy.contains('Doc 1').should('be.visible');
  });

  it('completes a task', () => {
    // Create a task first
    cy.get('input[placeholder="Add new task"]').type('Task to Complete');
    cy.get('button').contains('Add Task').click();
    
    // Mark task as complete
    cy.get('input[type="checkbox"]').first().check();
    
    // Verify task is marked as complete
    cy.contains('Task to Complete').should('have.class', 'line-through');
  });

  it('deletes a task', () => {
    // Create a task first
    cy.get('input[placeholder="Add new task"]').type('Task to Delete');
    cy.get('button').contains('Add Task').click();
    
    // Delete the task
    cy.contains('Task to Delete')
      .parent()
      .find('button')
      .contains('Delete')
      .click();
    
    // Verify task was deleted
    cy.contains('Task to Delete').should('not.exist');
  });

  it('limits document upload to 3 files', () => {
    // Create a task with 4 documents
    cy.get('input[placeholder="Add new task"]').type('Task with Multiple Documents');
    
    // Upload 4 documents
    cy.get('input[type="file"]').attachFile(['doc1.pdf', 'doc2.pdf', 'doc3.pdf', 'doc4.pdf']);
    
    // Submit the form
    cy.get('button').contains('Add Task').click();
    
    // Verify only 3 documents were attached
    cy.contains('Documents:').should('be.visible');
    cy.contains('Doc 1').should('be.visible');
    cy.contains('Doc 2').should('be.visible');
    cy.contains('Doc 3').should('be.visible');
    cy.contains('Doc 4').should('not.exist');
  });
}); 