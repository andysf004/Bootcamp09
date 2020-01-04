/* eslint-disable camelcase */
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { MdCheck, MdChevronLeft } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';
import { format, parseJSON } from 'date-fns';
import pt from 'date-fns/locale/pt';
import api from '~/services/api';
import history from '~/services/history';

import Header from '~/components/Header';
import {
  Container,
  Title,
  BackButton,
  SaveButton,
  Field,
  Text,
  Feature,
} from './styles';

export default function Enrollment() {
  const [price, setPrice] = useState();
  const [end_date, setEnd_date] = useState();

  async function handleSubmit({ name, title, start_date }) {
    try {
      const student = await api.get('students', { params: { name } });

      const student_id = student.data.id;
      const plan = await api.get('plan', { params: { title } });
      const plan_id = plan.data.id;
      const response = await api.post('enrollment', {
        student_id,
        plan_id,
        start_date,
      });

      setPrice(`R$ ${response.data.price},00`);
      setEnd_date(
        format(parseJSON(response.data.end_date), "dd'/'MM'/'yyyy", {
          locale: pt,
        })
      );

      toast.success('Plano cadastrado com sucesso');
    } catch (err) {
      toast.error('Falha no cadastro do plano, verifique os dados');
    }
  }

  function handleBack() {
    history.push('/managementEnrollment');
  }
  return (
    <>
      <Header />
      <Container>
        <Title>
          <p>Cadastro de matrícula</p>
          <div>
            <BackButton type="button" onClick={handleBack}>
              <span>
                <MdChevronLeft size={25} color="#FFF" />
                <p>VOLTAR</p>
              </span>
            </BackButton>
            <SaveButton type="submit" form="myform">
              <span>
                <MdCheck size={20} color="#FFF" />
                <p>SALVAR</p>
              </span>
            </SaveButton>
          </div>
        </Title>
        <Form id="myform" onSubmit={handleSubmit}>
          <Field>
            <Text>ALUNO</Text>
            <Input name="name" type="name" placeholder="Buscar aluno" />
          </Field>
          <span>
            <Feature>
              <Text>PLANO</Text>
              <Input name="title" type="plan" placeholder="Selecione o plano" />
            </Feature>
            <Feature>
              <Text>DATA DE INÍCIO</Text>
              <Input
                name="start_date"
                type="date"
                placeholder="Escolha a data"
              />
            </Feature>
            <Feature>
              <Text>DATA DE TÉRMINIO</Text>
              <Input name="dateEnd" placeholder=" " value={end_date || ' '} />
            </Feature>
            <Feature>
              <Text>VALOR FINAL</Text>
              <Input
                name="total"
                type="total"
                placeholder=" "
                value={price || ' '}
              />
            </Feature>
          </span>
        </Form>
      </Container>
    </>
  );
}
