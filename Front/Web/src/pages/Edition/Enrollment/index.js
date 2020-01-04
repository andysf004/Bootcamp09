import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { format, parseJSON } from 'date-fns';
import pt from 'date-fns/locale/pt';
import api from '~/services/api';
import history from '~/services/history';

import Header from '~/components/Header';
import { Container, Title, Field, Text, Feature } from './styles';

export default function Enrollment() {
  const [price, setPrice] = useState();
  const [end_date, setEnd_date] = useState();
  const student = useSelector(state => state.studentList.search);
  const plan = useSelector(state => state.planList.plan);
  const initialData = { student };
  console.log(initialData);

  async function handleSubmit({ name, title, start_date }) {
    const student_id = initialData.student.id;
    const planUpdate = plan.find(p => p.title === title);
    const plan_id = planUpdate.id;

    console.log(student.id, plan_id);
    const response = await api.put('enrollment', {
      student_id,
      plan_id,
      start_date,
    });
    console.log(response.data);
    setPrice(`R$ ${response.data.price},00`);
    setEnd_date(
      format(parseJSON(response.data.end_date), "dd'/'MM'/'yyyy", {
        locale: pt,
      })
    );
  }

  function handleBack() {
    history.push('/managementEnrollment');
  }
  return (
    <>
      <Header />
      <Container>
        <Title>
          <p>Edição de matrícula</p>
          <div>
            <button type="button" onClick={handleBack}>
              VOLTAR
            </button>
            <button type="submit" form="myform">
              SALVAR
            </button>
          </div>
        </Title>
        <Form initialData={initialData} id="myform" onSubmit={handleSubmit}>
          <Field>
            <Text>ALUNO</Text>
            <Input name="name" value={student.name} />
          </Field>
          <span>
            <Feature>
              <Text>PLANO</Text>
              <Input name="title" placeholder="Nome do plano" />
            </Feature>
            <Feature>
              <Text>DATA DE INÍCIO</Text>
              <Input name="start_date" type="date" />
            </Feature>
            <Feature>
              <Text>DATA DE TÉRMINIO</Text>
              <Input name="end_date" value={end_date || ' '} />
            </Feature>
            <Feature>
              <Text>VALOR FINAL</Text>
              <Input name="price" value={price || ' '} />
            </Feature>
          </span>
        </Form>
      </Container>
    </>
  );
}
