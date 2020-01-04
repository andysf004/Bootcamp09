import React from 'react';
import { Input, Form } from '@rocketseat/unform';
import { MdCheck, MdChevronLeft } from 'react-icons/md';
import api from '~/services/api';
import history from '~/services/history';

import Header from '~/components/Header';
import {
  Container,
  Title,
  SaveButton,
  BackButton,
  Field,
  Text,
  Feature,
} from './styles';

export default function Student() {
  async function handleSubmit({ name, email, age, weight, height }) {
    console.log('eu aki');
    await api.post('students', {
      name,
      email,
      age,
      weight,
      height,
    });
  }

  function handleBack() {
    history.push('/managementStudent');
  }
  return (
    <>
      <Header />
      <Container>
        <Title>
          <p>Cadastro de aluno</p>
          <div>
            <BackButton type="button" onClick={handleBack}>
              <span>
                <MdChevronLeft size={25} color="#FFF" />
                <p>VOLTAR</p>
              </span>
            </BackButton>
            <SaveButton type="submit" form="myForm">
              <span>
                <MdCheck size={20} color="#fff" />
                <p>SALVAR</p>
              </span>
            </SaveButton>
          </div>
        </Title>
        <Form id="myForm" onSubmit={handleSubmit}>
          <Field>
            <Text>NOME COMPLETO</Text>
            <Input name="name" placeholder="Nome do aluno" />
          </Field>
          <Field>
            <Text>ENDEREÇO DE E-MAIL</Text>
            <Input name="email" placeholder="E-mail do aluno" />
          </Field>
          <div>
            <Feature>
              <span>
                <Text>IDADE</Text>
                <Input name="age" placeholder="Idade do aluno" />
              </span>
              <span>
                <Text>PESO (em kg)</Text>
                <Input name="weight" placeholder="Peso do aluno" />
              </span>
              <span>
                <Text>ALTURA</Text>
                <Input name="height" placeholder="Altura do aluno" />
              </span>
            </Feature>
          </div>
        </Form>
      </Container>
    </>
  );
}
