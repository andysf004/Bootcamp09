import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {Image} from 'react-native';
import {signInRequest} from '~/store/module/auth/action';
import Button from '~/components/Button';
import logo from '~/Asset/logoSign.png';
import api from '~/services/api';

import {Container, Form, Input} from './styles';

export default function SignIn() {
  const dispatch = useDispatch();
  const [id, setId] = useState(0);

  async function handelSubmit() {
    console.tron.log(id);
    dispatch(signInRequest(id));
  }
  return (
    <Container>
      <Image source={logo} />
      <Form>
        <Input
          onChangeText={text => setId(text)}
          placeholder="Informe seu ID de cadastro"
        />
        <Button onPress={handelSubmit}>Entrar no sistema</Button>
      </Form>
    </Container>
  );
}
