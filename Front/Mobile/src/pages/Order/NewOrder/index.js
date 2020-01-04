import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '~/services/api';
import Button from '~/components/Button';
import logo from '~/Asset/logoHeader.png';

import { Container, Form, Input } from './styles';

export default function NewOrder() {
  const id = useSelector(state => state.auth.student_id);
  const [order, setOrder] = useState(' ');

  async function handleOrder() {
    console.tron.log(order);
    console.tron.log(id);

    await api.post(`/students/${id}/help-orders`, { question: order });
  }
  return (
    <Container>
      <Form>
        <Input
          multiline
          placeholder="Inclua seu pedido de auxilio"
          onChangeText={text => setOrder(text)}
        />
        <Button onPress={handleOrder}>Enviar pedido</Button>
      </Form>
    </Container>
  );
}

NewOrder.navigationOptions = ({ navigation }) => ({
  headerTitle: () => (
    <Image style={{ width: 116, height: 18, marginLeft: 86 }} source={logo} />
  ),
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('OrderHelp');
      }}
    >
      <Icon name="chevron-left" size={20} color="#333" />
    </TouchableOpacity>
  ),
});
