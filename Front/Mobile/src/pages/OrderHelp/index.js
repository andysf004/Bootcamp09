// eslint-disable-next-line react-hooks/rules-of-hooks
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '~/services/api';
import Button from '~/components/Button';
import Header from '~/components/Header';
import Question from '~/components/Question';

import { Container, List } from './styles';

export default function OrderHelp({ navigation }) {
  const id = useSelector(state => state.auth.student_id)
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function loadOrder() {
      const response = await api.get(`/students/${id}/help-orders`);
      setOrders(response.data);
    }

    loadOrder();
  }, []);

  return (
    <>
      <Header />

      <Container>
        <Button onPress={() => navigation.navigate('NewOrder')}>
          Novo pedido de auxílio
        </Button>
        <List
          data={orders}
          keyExtractor={item => String(item._id)}
          renderItem={({ item }) => (
            <Question data={item} navigation={navigation} />
          )}
        />
      </Container>
    </>
  );
}

OrderHelp.navigationOptions = {
  tabBarLabel: 'Pedir ajuda',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="live-help" size={20} color={tintColor} />
  ),
  style: {
    width: 71,
    fontSize: 18,
  },
};
