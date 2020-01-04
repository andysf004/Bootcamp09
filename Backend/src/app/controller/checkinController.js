import { Op } from 'sequelize';
import { subDays } from 'date-fns';
import Checkin from '../model/Checkin';
import Enrollment from '../model/Enrollment';

class CheckinController {
  async store(req, res) {
    const stud = await Enrollment.findOne({
      where: { student_id: req.params.id },
    });

    if (!stud) {
      res.json({ error: 'Student not enrolled ' });
    }

    // Verify checkin within 7 days
    const date = new Date();
    const { count } = await Checkin.findAndCountAll({
      where: {
        student_id: req.params.id,
        created_at: {
          [Op.between]: [subDays(date, 7), date],
        },
      },
    });

    if (count >= 5) {
      return res.json({ error: '5 check in within 7 days ' });
    }

    const checkin = await Checkin.create({
      student_id: req.params.id,
    });

    return res.json(checkin);
  }

  async show(req, res) {
    const student = await Checkin.findOne({
      where: { student_id: req.params.id },
    });

    if (!student) {
      res.json({ error: ' Student Invalid ' });
    }

    const list = await Checkin.findAll({
      where: { student_id: req.params.id },
    });

    return res.json(list);
  }
}

export default new CheckinController();
