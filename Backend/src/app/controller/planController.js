import { Op } from 'sequelize';
import Plan from '../model/Plan';

class PlanController {
  async store(req, res) {
    const planExist = await Plan.findOne({
      where: { title: req.body.title },
    });

    if (planExist) {
      return res.status(401).json({ error: 'Plan already exist' });
    }

    const { title, duration, price } = await Plan.create(req.body);

    return res.json({ title, duration, price });
  }

  async show(req, res) {
    const plan = req.query.title
      ? await Plan.findOne({
          where: { title: { [Op.like]: req.query.title } },
        })
      : await Plan.findAll();

    return res.json(plan);
  }

  async update(req, res) {
    const plane = await Plan.findOne({
      where: { title: req.body.title },
    });

    if (!plane) {
      return res.status(400).json({ error: 'Plan does not exist' });
    }

    await Plan.update(
      {
        title: req.body.title,
        duration: req.body.duration,
        price: req.body.price,
      },
      { where: { id: plane.id } }
    );

    const newPlane = await Plan.findOne({
      where: { title: req.body.title },
    });
    return res.json(newPlane);
  }

  async delete(req, res) {
    const plane = await Plan.findOne({
      where: { title: req.body.title },
    });

    if (!plane) {
      res.json({ error: ' Plan does not exixts ' });
    }

    await Plan.destroy({
      where: { title: req.body.title },
    });

    return res.json(plane);
  }
}

export default new PlanController();
