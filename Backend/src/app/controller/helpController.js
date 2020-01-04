import Help from '../schemas/Help';
import Students from '../model/Students';
import Queue from '../../lib/Queue';
import Answer from '../jobs/AnswerMail';

class HelpController {
  async show(req, res) {
    const orders = req.params.id
      ? await Help.find({
          student_id: req.params.id,
        }).sort('createdAt')
      : await Help.find({
          answer: null,
        }).sort('createdAt');

    return res.json(orders);
  }

  async store(req, res) {
    const { id } = req.params;
    const { question } = req.body;
    const order = await Help.create({
      student_id: id,
      question,
      answer: null,
      answer_at: null,
    });

    return res.json(order);
  }

  async update(req, res) {
    const { id } = req.params;

    const reply = req.body.answer;
    const today = new Date();

    const order = await Help.find({
      _id: id,
    });

    const user = await Students.findOne({
      where: { id: order[0].student_id },
    });

    if (!order) {
      return res.status(400).json({ error: 'Help order does not exist' });
    }

    await Help.updateOne(
      { _id: id },
      {
        $set: { answer: reply, answer_at: today },
        $currentDate: { lastModified: true },
      }
    );

    const ord = await Help.find({
      _id: id,
    });

    await Queue.add(Answer.key, {
      order,
      user,
      reply,
      today,
    });

    return res.json(ord);
  }
}

export default new HelpController();
