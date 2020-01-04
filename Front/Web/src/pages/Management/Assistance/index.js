import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Dialog from '@material-ui/core/Dialog';
import api from '~/services/api';

import Header from '~/components/Header';

import { Container, List, Modal, Button, TextField } from './styles';

export default function Assistance() {
  const [open, setOpen] = useState(false);
  const [answer, Setanswer] = useState({});
  const [reply, setReply] = useState(' ');

  const [orders, setOrders] = useState([]);
  const students = useSelector(state => state.studentList.students);

  useEffect(() => {
    async function load() {
      const response = await api.get('help-orders');
      const data = response.data.map(order => ({
        ...order,
        student: students.find(std => std.id === order.student_id),
      }));

      setOrders(data);
    }

    load();
  }, [students]);

  function handleOpen(id) {
    const order = orders.find(q => q._id === id);
    setOpen(true);
    Setanswer(order);
  }
  async function handleSubmit() {
    // eslint-disable-next-line no-underscore-dangle
    await api.put(`/students/help-orders/${answer._id}/answer`, {
      answer: reply,
    });
    setOpen(false);
  }
  return (
    <>
      <Header />
      <Container>
        <strong>Pedidos de Auxílio</strong>
        <List>
          <thead>
            <tr>
              <th id="name">ALUNO</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={String(order._id)}>
                <td>{order.student.name}</td>
                <td>
                  <button type="button" onClick={() => handleOpen(order._id)}>
                    responder
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </List>
        <Dialog open={open} onClose="" id="myform">
          <Modal>
            <div>
              <h4>PERGUNTA DO ALUNO</h4>
              <p>{answer.question}</p>
            </div>
            <div>
              <h4>SUA RESPOSTA</h4>
              <TextField
                name="name"
                type="text"
                onChange={e => setReply(e.target.value)}
                form="myform"
              />
            </div>
            <Button onClick={handleSubmit} color="primary">
              Responder aluno
            </Button>
          </Modal>
        </Dialog>
      </Container>
    </>
  );
}
