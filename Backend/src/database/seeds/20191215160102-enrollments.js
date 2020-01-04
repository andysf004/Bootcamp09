module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert(
        'enrollments', 
        [
          {
            student_id: 1,
            plan_id: 1,
            start_date: new Date()
          },
          {
            student_id: 2,
            plan_id: 1,
            start_date: new Date()
          },
          {
            student_id: 3,
            plan_id: 2,
            start_date: new Date()
          },
          {
            student_id: 4,
            plan_id: 3,
            start_date: new Date()
          },
          {
            student_id: 5,
            plan_id: 1,
            start_date: new Date()
          },
          {
            student_id: 6,
            plan_id: 2,
            start_date: new Date()
          },
          {
            student_id: 7,
            plan_id: 3,
            start_date: new Date()
          },
        ], {});
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  },
};
