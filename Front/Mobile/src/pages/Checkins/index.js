import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '~/services/api';
import Header from '~/components/Header';
import Button from '~/components/Button';
import Check from '~/components/Check';

import { Container, List } from './styles';

export default function Checkins() {
  const [check, setCheck] = useState([]);

  const id = useSelector(state => state.auth.student_id);

  useEffect(() => {
    async function loadCheckins() {
      const response = await api.get(`students/${id}/checkin`);
      setCheck(response.data);
    }

    loadCheckins();
  }, [id]);

  async function handleCheck(student_id) {
    const response = await api.post(`students/${student_id}/checkin`);
    if (response.data.error === '5 check in within 7 days ') {
      Alert.alert('Você já efetuou 5 check ins no período de 7 dias');
    } else {
      const resp = await api.get(`students/${id}/checkin`);
      setCheck(resp.data);
    }
  }

  return (
    <>
      <Header />
      <Container>
        <Button onPress={() => handleCheck(id)}>Novo check-in</Button>
        <List
          data={check}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Check data={item} tam={check.indexOf(item)} />
          )}
        />
      </Container>
    </>
  );
}

Checkins.navigationOptions = {
  tabBarLabel: 'Check-ins',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="edit-location" size={20} color={tintColor} />
  ),
  style: {
    width: 71,
    fontSize: 14,
  },
};
