module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert(
        'enrollments', 
        [
          {
            student_id: 1,
            plan_id: 1,
            price: 109,
            start_date: "2019-11-25T00:00:00-03:00",
            end_date: "2019-12-24T00:00:00-03:00",
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            student_id: 2,
            plan_id: 1,
            price: 109,
            start_date: "2019-11-28T00:00:00-03:00",
            end_date: "2019-12-28T00:00:00-03:00",
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            student_id: 3,
            plan_id: 2,
            price: 297,
            start_date: "2019-11-30T00:00:00-03:00",
            end_date: "2020-2-29T00:00:00-03:00",
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            student_id: 4,
            plan_id: 3,
            price: 534,
            start_date: "2019-11-28T00:00:00-03:00",
            end_date: "2020-5-28T00:00:00-03:00",
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            student_id: 5,
            plan_id: 1,
            price: 109,
            start_date: "2019-11-28T00:00:00-03:00",
            end_date: "2019-12-28T00:00:00-03:00",
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            student_id: 6,
            plan_id: 2,
            price: 297,
            start_date: "2019-11-28T00:00:00-03:00",
            end_date: "2020-2-28T00:00:00-03:00",
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            student_id: 7,
            plan_id: 3,
            price: 534,
            start_date: "2019-7-28T00:00:00-03:00",
            end_date: "2019-12-28T00:00:00-03:00",
            created_at: new Date(),
            updated_at: new Date(),
          },
        ], {});
    
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('enrollments', null, {});
  },
};
