import Sequelize from 'sequelize';
import mongoose from 'mongoose';
import User from '../app/model/User';

import Students from '../app/model/Students';
import Enrollment from '../app/model/Enrollment';
import Plan from '../app/model/Plan';
import Checkin from '../app/model/Checkin';

import databaseConfig from '../config/database';

const models = [User, Students, Enrollment, Plan, Checkin];

class Database {
  constructor() {
    this.init();
    this.mongo();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
    models.map(
      model => model.associate && model.associate(this.connection.models)
    );
  }

  mongo() {
    this.mongoConnection = mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
    });
  }
}

export default new Database();
