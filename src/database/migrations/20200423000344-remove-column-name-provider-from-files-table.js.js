'use strict';

module.exports = {
  up: queryInterface => {
      return queryInterface.removeColumn('files', 'provider');    
  },

  down: queryInterface => {
      return queryInterface.addColumn('files', 'provider');
  }
};
