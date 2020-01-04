import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdAdd } from 'react-icons/md';
import history from '~/services/history';
import api from '~/services/api';
import { planUpdate, planEdition } from '~/store/module/planList/actions';
// import { store } from '~/store';

import Header from '~/components/Header';
import { Container, Title, List, RegisterButton } from './styles';

export default function Plan() {
  const p = useSelector(state => state.planList.plan);

  const [plans, setPlans] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const data = p.map(plan => ({
      ...plan,
      durationFormatted: `${plan.duration} mês`,
      priceFormatted: `R$ ${plan.price},00`,
    }));

    setPlans(data);
    // dispatch(planStore(data));
  }, [p]);

  function handleRegister() {
    history.push('/registerPlan');
  }

  function handleEdition(id) {
    const editionPlan = plans.find(plan => plan.id === id);
    dispatch(planEdition(editionPlan));
    history.push('/editionPlan');
  }

  async function handleDelete(title) {
    await api.delete('plan', { data: { title } });
    // setPlans(response.data);
    dispatch(planUpdate());
  }
  return (
    <>
      <Header />
      <Container>
        <Title>
          <p>Gerenciando planos</p>

          <RegisterButton type="button" onClick={handleRegister}>
            <MdAdd size={20} color="#fff" />
            CADASTRAR
          </RegisterButton>
        </Title>
        <List>
          <thead>
            <tr>
              <th id="title">TÍTULO</th>
              <th>DURAÇÃO</th>
              <th>VALOR p/MÊS</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {plans.map(plan => (
              <tr key={plan.id}>
                <td id="name">{plan.title}</td>
                <td>{plan.durationFormatted}</td>
                <td>{plan.priceFormatted}</td>
                <td>
                  <button type="button" onClick={() => handleEdition(plan.id)}>
                    editar
                  </button>
                  <button
                    type="button"
                    delete
                    onClick={() => handleDelete(plan.title)}
                  >
                    apagar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </List>
      </Container>
    </>
  );
}
