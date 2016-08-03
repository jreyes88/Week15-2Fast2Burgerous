'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Burgers', [{
        name: 'Big Greasy Cheeseburger',
        devoured: false
      },{
        name: 'Double Bacon Burger',
        devoured: false
      },{
        name: 'Texas Chainsaw Massa-curd Burger',
        devoured: false
      }], {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Burgers', null, {});
  }
};
