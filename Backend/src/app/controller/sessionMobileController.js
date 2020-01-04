import jwt from 'jsonwebtoken';
import authConfig from '../../config/auth';
import Enrollment from '../model/Enrollment';
import Checkin from '../model/Checkin';

//Controle para Sign in do aluno no celular
class SessionMobile {
  async store(req, res) {
    const stud = await Enrollment.findOne({
      where: { student_id: req.body.id },
    });

    if (!stud) {
      res.json({ error: 'Student not enrolled ' });
    }

    const checkin = await Checkin.create({
      student_id: req.body.id,
    });

    const { id, student_id } = checkin;

    return res.json({
      checkin: {
        id,
        student_id,
      },
      token: jwt.sign({ student_id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionMobile();
