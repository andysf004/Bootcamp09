import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { MdChevronLeft, MdCheck } from 'react-icons/md';
import api from '~/services/api';
import history from '~/services/history';
import { planUpdate } from '~/store/module/planList/actions';
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
  const initialData = useSelector(state => state.planList.planEdition);
  const dispatch = useDispatch();

  async function handleSubmit({ title, duration, price }, { resetForm }) {
    await api.put('plan', { title, duration, price });
    dispatch(planUpdate());
    resetForm();
  }

  function handleBack() {
    history.push('/managementPlan');
  }
  return (
    <>
      <Header />
      <Container>
        <Title>
          <p>Edição de plano</p>
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
            <Text>TÍTULO DO PLANO</Text>
            <Input name="title" />
          </Field>
          <span>
            <Feature>
              <Text>DURAÇÃO (em meses)</Text>
              <Input name="duration" />
            </Feature>
            <Feature>
              <Text>PREÇO MENSAL</Text>
              <Input name="price" />
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
