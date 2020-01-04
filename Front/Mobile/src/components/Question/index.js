import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import formatRelative from 'date-fns/formatRelative';
import { parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { Container, Status, Time, Title, Content } from './styles';

export default function Question({ data, navigation, ...rest }) {
  const dateFormatted = data.answer_at
    ? useMemo(() => {
        return formatRelative(parseISO(data.answer_at), new Date(), {
          locale: pt,
          addSuffix: true,
        });
      }, [data.answer_at])
    : null;

  return (
    <Container
      onPress={() => navigation.navigate('ViewOrder', { data })}
      {...rest}
    >
      <Title>
        <Status status={data.answer}>
          {data.answer ? 'Respondido' : 'Sem resposta'}
        </Status>
        <Time> {dateFormatted}</Time>
      </Title>
      <Content>{data.question}</Content>
    </Container>
  );
}
