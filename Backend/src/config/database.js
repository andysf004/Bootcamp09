module.exports = {
  dialect: 'postgres',
  host: '192.168.99.100', // IP of Linux virtual machine
  username: 'postgres',
  password: 'docker',
  database: 'Gympoint',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
