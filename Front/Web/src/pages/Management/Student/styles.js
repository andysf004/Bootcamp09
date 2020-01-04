import styled from 'styled-components';

export const Container = styled.div`
  background: #f2f2f2;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
`;
export const RegisterButton = styled.button`
  width: 142px;
  height: 36px;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: #fff;
  background: #de3b3b;
  border: 0;
  border-radius: 4px;
  margin-right: 16px;
  padding-right: 16px;
  text-align: right;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1200px;
  margin-top: 34px;

  > p {
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    font-family: Roboto, sans-serif;
    color: #444444;
    margin-bottom: 8px;
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;

    form {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 36px;
      border: 1px solid #aaa;
      border-radius: 4px;
      background: #fff;

      button {
        border: 0;
        background: none;
      }

      input {
        border: 0;
        background: none;
      }
    }
  }
`;

export const List = styled.table`
  background: #fff;
  width: 1200px;
  margin-top: 24px;
  padding: 30px 30px;
  border: 0;
  border-radius: 10px;

  thead th {
    text-align: left;
  }

  thead th#name {
    text-align: left;
    width: 1000px;
  }

  thead th#email {
    text-align: left;
    width: 600px;
  }

  tbody td {
    border-bottom: 1px solid #ccc;

    padding: 16px 0;
    width: 250px;
  }

  tbody td#age {
    padding: 16px 20px;
  }

  button {
    border: 0;
    background: none;
    color: #de3b3b;
    padding-right: 23px;
    text-align: right;
  }
`;


export const Modal = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 450px;
  padding: 30px;

  h4 {
    margin-bottom: 8px;
  }

  p {
    width: 390px;
    height: 150px;

    font-size: 16px;
    line-height: 26px;
  }
`;

export const Button = styled.button`
  background: #de3b3b;
  width: 390px;
  height: 45px;
  border: 0;
  border-radius: 4px;
  color: #fff;
  margin-top: 21px;
  font-family: Roboto, sans-serif;
  font-weight: bold;
  font-size: 16px;
`;