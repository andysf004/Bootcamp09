'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert(
        'checkin', 
        [
          {
            student_id: 1,
            created_at: new Date(),
            updated_at: new Date(),
          }, 
          {
            student_id: 1,
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            student_id: 1,
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            student_id: 2,
            created_at: new Date(),
              updated_at: new Date(),
          },
          {
            student_id: 2,
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            student_id: 2,
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            student_id: 3,
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            student_id: 3,
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            student_id: 4,
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            student_id: 5,
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            student_id: 5,
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            student_id: 6,
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            student_id: 6,
            created_at: new Date(),
            updated_at: new Date(),
          },
        ], {});
    
  },

  down: (queryInterface, Sequelize) => {
   
  }
};
