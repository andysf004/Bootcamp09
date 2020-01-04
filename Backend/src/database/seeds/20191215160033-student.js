module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      'students',
      [
        {
          name: 'Marcos Silva',
          email: 'marcos@email.com',
          age: 23,
          weight: 80,
          height: 179,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'André Oliveira',
          email: 'andre@email.com',
          age: 30,
          weight: 75,
          height: 170,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'John Santos',
          email: 'john@email.com',
          age: 25,
          weight: 85,
          height: 181,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Liz Silva',
          email: 'liz@email.com',
          age: 23,
          weight: 60,
          height: 150,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Augusto Cesar',
          email: 'augusto@email.com',
          age: 35,
          weight: 80,
          height: 178,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Maicon Silva',
          email: 'maicon@email.com',
          age: 38,
          weight: 75,
          height: 179,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Diego Cordeiro',
          email: 'diego@email.com',
          age: 23,
          weight: 79,
          height: 175,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Gabriela Santos',
          email: 'gabriela@email.com',
          age: 23,
          weight: 80,
          height: 179,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('students', null, {});
  },
};
