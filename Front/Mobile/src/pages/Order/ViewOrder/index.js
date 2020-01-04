import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Image } from 'react-native';
import formatRelative from 'date-fns/formatRelative';
import { parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Icon from 'react-native-vector-icons/MaterialIcons';
import logo from '~/Asset/logoHeader.png';

import { Container, Body, Header, Text, Time, Content } from './styles';

export default function ViewOrder({ navigation }) {
  const order = navigation.getParam('data');

  const dateFormatted = order.createdAt
    ? formatRelative(parseISO(order.createdAt), new Date(), {
        locale: pt,
        addSuffix: true,
      })
    : null;

  return (
    <Container>
      <Body>
        <Header>
          <Text> PERGUNTA</Text>
          <Time> {dateFormatted}</Time>
        </Header>
        <Content>{order.question}</Content>
        <Text>RESPOSTA</Text>
        <Content>{order.answer}</Content>
      </Body>
    </Container>
  );
}

ViewOrder.navigationOptions = ({ navigation }) => ({
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

ViewOrder.prototype = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
  }).isRequire,
};
