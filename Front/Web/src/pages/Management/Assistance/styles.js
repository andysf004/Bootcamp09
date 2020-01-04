import styled from 'styled-components';

export const Container = styled.div`
  background: #f2f2f2;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;

  strong {
    display: flex;
    justify-content: start;
    align-items: center;
    width: 700px;
    text-align: left;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    font-family: Roboto, sans-serif;
    color: #444444;
    margin: 34px 0 24px;
  }
`;

export const List = styled.table`
  background: #fff;
  width: 700px;
  margin-top: 24px;
  padding: 30px 30px;
  border: 0;
  border-radius: 10px;

  thead th {
    text-align: left;
  }

  tbody td {
    border-bottom: 1px solid #ccc;
    padding: 16px 0;
    width: 250px;
  }

  tbody td#button {
    text-align: right;
    padding: 16px 0;
    width: 350px;
  }

  button {
    border: 0;
    background: none;
    color: #4d85ee;
    padding-right: 0;
    text-align: right;
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

export const TextField = styled.textarea`
  border: 1px, solid, #ddd;
  border-radius: 4px;
  width: 390px;
  height: 127px;
  padding: 13px 15px;
  font-size: 16px;
  line-height: 19px;
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
