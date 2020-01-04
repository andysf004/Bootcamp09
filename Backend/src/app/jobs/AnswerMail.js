import format from 'date-fns/format';
import { parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Mail from '../../lib/Mail';

class AnswerMail {
  get Key() {
    return 'AnswerMail';
  }

  async handle({ data }) {
    const { user, order, reply, today } = data;

    await Mail.sendMail({
      to: `${user.name} <${user.email}>`,
      subject: 'Novo pedido de auxílio respondido',
      template: 'answer',
      context: {
        student: user.name,
        question: order[0].question,
        reply,
        date: format(parseISO(today), " dd 'de' MMMM ', às ' H:mm'h'", {
          locale: pt,
        }),
      },
    });
  }
}

export default new AnswerMail();
