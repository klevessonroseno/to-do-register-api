'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn(
        'users',
        'password_hash',
        {
          type: Sequelize.STRING,
          allowNull: false,          
        });    
  },

  down: queryInterface => {
      return queryInterface.removeColumn('users', 'password_hash');  
  }
};
