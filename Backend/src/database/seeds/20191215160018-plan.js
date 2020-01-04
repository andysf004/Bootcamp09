module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      'plans',
      [
        {
          title: 'Basic',
          duration: 1,
          price: 109,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: 'Silver',
          duration: 3,
          price: 99,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: 'Gold',
          duration: 6,
          price: 89,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: 'Diamond',
          duration: 12,
          price: 79,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('plans', null, {});
  },
};
