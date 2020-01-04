import Enrollment from '../model/Enrollment';
import Plan from '../model/Plan';

class EnrollmentController {
  async store(req, res) {
    const enrollmentExist = await Enrollment.findOne({
      where: { student_id: req.body.student_id },
    });

    if (enrollmentExist) {
      return res.status(401).json({ error: 'enrollment already exist' });
    }

    const { student_id, plan_id, start_date } = req.body;

    const plan = await Plan.findByPk(plan_id);
    const price = plan.duration * plan.price;

    const date = new Date(start_date);
    const aux_date = date.getMonth() + plan.duration;
    const end_date = new Date(date.setMonth(aux_date));

    await Enrollment.create({
      student_id,
      plan_id,
      start_date,
      end_date,
      price,
    });

    return res.json({ student_id, plan_id, start_date, end_date, price });
  }

  async show(req, res) {
    const enrollment = await Enrollment.findAll();

    return res.json(enrollment);
  }

  async update(req, res) {
    const enrollment = await Enrollment.findOne({
      where: { student_id: req.body.student_id },
    });

    if (!enrollment) {
      return res.status(400).json({ error: 'Enrollment does not exist' });
    }

    const { student_id, plan_id, start_date } = req.body;

    const plan = await Plan.findByPk(plan_id);
    const price = plan.duration * plan.price;

    const date = new Date(start_date);
    const aux_date = date.getMonth() + plan.duration;
    const end_date = new Date(date.setMonth(aux_date));

    await Enrollment.update(
      {
        student_id,
        plan_id,
        start_date,
        end_date,
        price,
      },
      { where: { id: enrollment.id } }
    );

    const NewEnrollment = await Enrollment.findOne({
      where: { student_id: req.body.student_id },
    });

    return res.json(NewEnrollment);
  }

  async delete(req, res) {
    const enrollment = await Enrollment.findOne({
      where: { student_id: req.body.student_id },
    });

    await Enrollment.destroy({
      where: { student_id: req.body.student_id },
    });

    return res.json(enrollment);
  }
}

export default new EnrollmentController();
