import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input, Form } from '@rocketseat/unform';
import { MdAdd, MdSearch } from 'react-icons/md';
import api from '~/services/api';
import history from '~/services/history';
import {
  studentStore,
  studentEdition,
} from '~/store/module/studentList/actions';
import Header from '~/components/Header';
import { Container, Title, List, RegisterButton } from './styles';

export default function Student() {
  const s = useSelector(state => state.studentList.students);

  const [students, setStudents] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadStudent() {
      const data = s;
      setStudents(data);
      dispatch(studentStore(data));
    }
    loadStudent();
  }, [dispatch, s, setStudents]);

  function handleRegister() {
    history.push('/registerStudent');
  }

  function handleEdition(id) {
    const st = students.find(student => student.id === id);
    dispatch(studentEdition(st));
    history.push('/editionStudent');
  }

  async function handleSearch({ nameSearch }) {
    const st = students.find(student => student.name === nameSearch);
    setStudents([st]);
  }

  async function handleDelete(id) {
    const student = students.find(std => std.id === id);

    await api.delete('students', {
      data: { email: student.email },
    });
    const response = await api.get('students');
    setStudents(response.data);
    dispatch(studentStore(response.data));
  }

  return (
    <>
      <Header />
      <Container>
        <Title>
          <p>Gerenciando alunos</p>
          <span>
            <RegisterButton type="button" onClick={handleRegister}>
              <MdAdd size={20} color="#fff" />
              CADASTRAR
            </RegisterButton>
            <Form id="search" onSubmit={handleSearch}>
              <button type="submit" Form="search">
                <MdSearch size={20} color="#aaa" />
              </button>
              <Input
                name="nameSearch"
                form="search"
                placeholder="Buscar aluno"
              />
            </Form>
          </span>
        </Title>
        <List>
          <thead>
            <tr>
              <th id="name">NOME</th>
              <th id="email">E-MAIL</th>
              <th>IDADE</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={String(student.id)}>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td id="age">{student.age}</td>
                <td>
                  <button
                    type="submit"
                    onClick={() => handleEdition(student.id)}
                  >
                    editar
                  </button>
                  <button
                    type="submit"
                    onClick={() => handleDelete(student.id)}
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
