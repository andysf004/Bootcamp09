import * as Yup from 'yup';
import User from '../model/User';

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string
        .email()
        .required()
        .required(),
      password: Yup.string()
        .required()
        .min(6),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: ' Validations fails ' });
    }
    const userExist = await User.findOne({
      where: { email: req.body.email },
    });

    if (userExist) {
      res.status(400).json({ error: ' User already exist. ' });
    }

    const { id, name, email, password } = await User.create(req.body);

    return res.json({ id, name, email, password });
  }
}

export default new UserController();
