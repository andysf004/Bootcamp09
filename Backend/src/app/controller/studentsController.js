import { Op } from 'sequelize';
import Students from '../model/Students';

class StudentsController {
  async store(req, res) {
    const userExist = await Students.findOne({
      where: { email: req.body.email },
    });

    if (userExist) {
      res.status(400).json({ error: ' Students already exist. ' });
    }

    const { id, name, email, age, weight, height } = await Students.create(
      req.body
    );

    return res.json({
      id,
      name,
      email,
      age,
      weight,
      height,
    });
  }

  async show(req, res) {
    const student = req.query.name
      ? await Students.findOne({
          where: { name: { [Op.like]: req.query.name } },
        })
      : await Students.findAll();

    return res.json(student);
  }

  async update(req, res) {
    const student = await Students.findOne({
      where: { email: req.body.email },
    });

    if (!student) {
      return res.status(400).json({ error: 'Student does not exist' });
    }

    const { age, height, weight } = await student.update(req.body);

    return res.json({ age, height, weight });
  }

  async delete(req, res) {
    const student = await Students.findOne({
      where: { email: req.body.email },
    });

    if (!student) {
      res.json({ error: ' Student does not exists ' });
    }

    await Students.destroy({
      where: { email: req.body.email },
    });

    return res.json(student);
  }
}

export default new StudentsController();
