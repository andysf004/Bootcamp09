import React from 'react';
import { MdCheck, MdChevronLeft } from 'react-icons/md';
import { Input, Form } from '@rocketseat/unform';
import { toast } from 'react-toastify';
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

export default function Plan() {
  async function handleSubmit({ title, duration, price }) {
    try {
      await api.post('plan', { title, duration, price });

      toast.success('Plano cadastrado com sucesso');
    } catch (err) {
      toast.error('Falha no cadastro do plano, verifique os dados');
    }
  }

  function handleBack() {
    history.push('/managementPlan');
  }
  return (
    <>
      <Header />
      <Container>
        <Title>
          <p>Cadastro de plano</p>
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
            <Text>TÍTULO DO PLANO</Text>
            <Input name="title" type="name" />
          </Field>
          <span>
            <Feature>
              <Text>DURAÇÃO (em meses)</Text>
              <Input name="duration" type="duration" />
            </Feature>
            <Feature>
              <Text>PREÇO MENSAL</Text>
              <Input name="price" type="price" />
            </Feature>
            <Feature>
              <Text>PREÇO TOTAL</Text>
              <Input name="total" type="total" />
            </Feature>
          </span>
        </Form>
      </Container>
    </>
  );
}
