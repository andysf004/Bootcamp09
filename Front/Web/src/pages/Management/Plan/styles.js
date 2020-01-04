import styled from 'styled-components';

export const Container = styled.div`
  background: #f2f2f2;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
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

  thead th#title {
    text-align: left;
    width: 800px;
  }

  thead th#email {
    text-align: left;
    width: 600px;
  }

  tbody td {
    border-bottom: 1px solid #ccc;
    padding: 16px 20px;
    width: 250px;
  }

  tbody td#name {
    border-bottom: 1px solid #ccc;
    padding: 16px 0;
    width: 250px;
  }

  button {
    border: 0;
    background: none;
    color: ${props => (props.delete ? '#00f' : '#de3b3b')};
    padding-right: 23px;
    text-align: right;
  }
`;
