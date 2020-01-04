import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import formatRelative from 'date-fns/formatRelative';
import { parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { Text } from 'react-native';
import { Container, Left, Right } from './styles';

export default function Check({ data, tam }) {
  const a = tam + 1;
  const dateFormatted = useMemo(() => {
    return formatRelative(parseISO(data.createdAt), new Date(), {
      locale: pt,
      addSuffix: true,
    });
  }, [data.createdAt]);

  return (
    <Container>
      <Left>
        <Text>Check-in#{a}</Text>
      </Left>
      <Right>
        <Text>{dateFormatted}</Text>
      </Right>
    </Container>
  );
}

Check.propTypes = {
  data: PropTypes.shape({
    createdAt: PropTypes.string,
  }).isRequired,
  tam: PropTypes.number.isRequired,
};
