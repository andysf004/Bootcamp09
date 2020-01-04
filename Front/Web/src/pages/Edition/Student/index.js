import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useDispatch, useSelector } from 'react-redux';
import { MdChevronLeft, MdCheck } from 'react-icons/md';
import api from '~/services/api';
import history from '~/services/history';

import { studentUpdate } from '~/store/module/studentList/actions';
import Header from '~/components/Header';
import {
  Container,
  Title,
  Field,
  Text,
  Feature,
  BackButton,
  SaveButton,
} from './styles';

export default function Student() {
  const initialData = useSelector(state => state.studentList.search);
  const dispatch = useDispatch();

  async function handleSubmit(
    { name, email, age, weight, height },
    { resetForm }
  ) {
    await api.put('students', { name, email, age, weight, height });
    dispatch(studentUpdate());
    resetForm();
  }

  function handleBack() {
    history.push('/managementStudent');
  }
  return (
    <>
      <Header />
      <Container>
        <Title>
          <p>Edição de aluno</p>
          <div>
            <BackButton type="button" onClick={handleBack}>
              <span>
                <MdChevronLeft size={25} color="#FFF" />
                <p>VOLTAR</p>
              </span>
            </BackButton>
            <SaveButton type="submit" form="myform">
              <span>
                <MdCheck size={20} color="#fff" />
                <p>SALVAR</p>
              </span>
            </SaveButton>
          </div>
        </Title>
        <Form initialData={initialData} id="myform" onSubmit={handleSubmit}>
          <Field>
            <Text>NOME COMPLETO</Text>
            <Input name="name" />
          </Field>
          <Field>
            <Text>ENDEREÇO DE E-MAIL</Text>
            <Input name="email" />
          </Field>
          <span>
            <Feature>
              <Text>IDADE</Text>
              <Input name="age" />
            </Feature>
            <Feature>
              <Text>PESO (em kg)</Text>
              <Input name="weight" />
            </Feature>
            <Feature>
              <Text>ALTURA</Text>
              <Input name="height" />
            </Feature>
          </span>
        </Form>
      </Container>
    </>
  );
}
