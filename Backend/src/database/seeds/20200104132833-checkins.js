'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert(
        'checkins', 
        [
          {
            student_id: 1,
            created_at: "2019-11-28T00:00:00-03:00",
            updated_at: "2019-11-28T00:00:00-03:00"
          },
          {
            student_id: 1,
            created_at: "2019-12-02T00:00:00-03:00",
            updated_at: "2019-12-02T00:00:00-03:00"
          },
          
          {
            student_id: 1,
            created_at: "2019-12-05T00:00:00-03:00",
            updated_at: "2019-12-05T00:00:00-03:00"
          },
          
          {
            student_id: 1,
            created_at: "2019-12-11T00:00:00-03:00",
            updated_at: "2019-12-11T00:00:00-03:00"
          },
          
          {
            student_id: 1,
            created_at: "2019-12-15T00:00:00-03:00",
            updated_at: "2019-12-15T00:00:00-03:00"
          },
        ], {});
    
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('checkins', null, {});
  }
};
