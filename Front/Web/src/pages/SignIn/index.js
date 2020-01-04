import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { signInRequest } from '~/store/module/auth/action';

import logoSignIn from '~/assets/logoSignIn.svg';
import { Container, Content } from './styles';

export default function SignIn() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useDispatch();

  async function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <Container>
      <Content>
        <img src={logoSignIn} alt="logo" />

        <Form onSubmit={handleSubmit}>
          <span>
            <p>SEU E-MAIL</p>
            <Input type="email" name="email" placeholder="exemplo@email.com" />
          </span>
          <span>
            <p>SUA SENHA</p>
            <Input type="password" name="password" />
          </span>
          <button type="submit">Entrar no sistema</button>
        </Form>
      </Content>
    </Container>
  );
}
