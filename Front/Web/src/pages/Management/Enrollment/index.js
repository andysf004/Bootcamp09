import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { format, parseJSON } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { MdAdd } from 'react-icons/md';
import api from '~/services/api';
import history from '~/services/history';
import { studentEdition } from '~/store/module/studentList/actions';
import { planEdition } from '~/store/module/planList/actions';

import Header from '~/components/Header';
import { Container, Title, List, RegisterButton } from './styles';

export default function Enrollment() {
  const dispatch = useDispatch();
  const students = useSelector(state => state.studentList.students);
  const plans = useSelector(state => state.planList.plan);

  const [enrollments, setEnrollments] = useState([]);

  function dateFormatted(date) {
    return format(parseJSON(date), "dd'/'MM'/'yyyy", {
      locale: pt,
    });
  }

  useEffect(() => {
    async function loadEnrollment() {
      const response = await api.get('enrollment');
      const data = response.data.map(enrollment => ({
        ...enrollment,
        student: students.find(std => std.id === enrollment.student_id),
        plan: plans.find(std => std.id === enrollment.plan_id),
        startDate: dateFormatted(enrollment.start_date),
        endDate: dateFormatted(enrollment.end_date),
        activa: enrollment.active ? 'sim' : 'não',
      }));
      setEnrollments(data);
    }

    loadEnrollment();
  }, [plans, students]);

  function handleRegister() {
    history.push('/registerEnrollment');
  }

  function handleEdition(id) {
    const enrollment = enrollments.find(enroll => enroll.id === id);
    dispatch(studentEdition(enrollment.student));
    dispatch(planEdition(enrollment.plan));

    history.push('/editionEnrollment');
  }

  async function handleDelete(id) {
    const student_id = id;
    await api.delete('enrollment', { data: { student_id } });
    const response = await api.get('enrollment');
    setEnrollments(enrollments.filter(e => e.student_id !== id));
  }
  return (
    <>
      <Header />
      <Container>
        <Title>
          <p>Gerenciando matrículas</p>
          <span>
            <RegisterButton type="button" onClick={handleRegister}>
              <MdAdd size={20} color="#fff" />
              CADASTRAR
            </RegisterButton>
          </span>
        </Title>
        <List>
          <thead>
            <tr>
              <th id="name">ALUNO</th>
              <th>PLANO</th>
              <th>INÍCIO</th>
              <th>TÉRMINO</th>
              <th>ATIVA</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {enrollments.map(enrollment => (
              <tr key={String(enrollment.id)}>
                <td id="name">{enrollment.student.name}</td>
                <td>{enrollment.plan.title}</td>
                <td>{enrollment.startDate}</td>
                <td>{enrollment.endDate}</td>
                <td>{enrollment.activa}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => handleEdition(enrollment.id)}
                  >
                    editar
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDelete(enrollment.student.id)}
                  >
                    apagar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </List>
      </Container>
    </>
  );
}
