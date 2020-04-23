'use strict';

module.exports = {
  up: queryInterface => {
      return queryInterface.removeColumn('files', 'password_hash');    
  },
  down: queryInterface => {
      return queryInterface.addColumn('files', 'password_hash');    
  }
};
