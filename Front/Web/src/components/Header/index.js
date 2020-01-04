import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signOut } from '~/store/module/auth/action';
import { Container, List, Profile, ExitButton } from './styles';
import logo from '~/assets/listS.svg';

export default function Header() {
  const dispatch = useDispatch();
  const name = useSelector(state => state.auth.name);
  function handleExit() {
    dispatch(signOut());
  }
  return (
    <Container>
      <div>
        <img src={logo} alt="logo" />
        <List>
          <Link to="/managementStudent">ALUNOS</Link>
          <Link to="/managementPlan">PLANOS</Link>
          <Link to="/managementEnrollment">MATRÍCULAS</Link>
          <Link to="/reqAssistance">PEDIDO DE AUXÍLIO</Link>
        </List>
      </div>
      <Profile>
        <p>{name}</p>
        <ExitButton onClick={handleExit}>sair do sistema</ExitButton>
      </Profile>
    </Container>
  );
}
