import styled from 'styled-components';

export const Container = styled.div`
  background: #f2f2f2;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;

  form {
    background: #fff;
    width: 900px;
    margin-top: 24px;
    padding: 30px 30px;
    border: 0;
    border-radius: 10px;
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 900px;
  margin-top: 34px;

  > p {
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    font-family: Roboto, sans-serif;
    color: #444444;
    margin-bottom: 8px;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const BackButton = styled.button`
  width: 112px;
  height: 36px;
  color: #fff;
  background: #aaa;
  border: 0;
  border-radius: 4px;
  margin-left: 16px;
  font-weight: bold;

  &:hover {
    cursor: pointer;
  }

  span {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

export const SaveButton = styled.button`
  width: 112px;
  height: 36px;

  background: #de3b3b;
  border: 0;
  border-radius: 4px;
  margin-left: 16px;
  padding-right: 16px;

  &:hover {
    cursor: pointer;
  }

  span {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    p {
      font-weight: bold;
      color: #fff;
      padding-left: 5px;
    }
  }
`;

export const Text = styled.p`
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  font-family: Roboto, sans-serif;
  color: #444444;
  margin-bottom: 8px;
`;

export const Field = styled.div`
  flex: 1;
  margin-top: 20px;
  padding: 0;

  > input {
    height: 45px;
    padding: 13px 15px;
    border: 1px solid #dddddd;
    border-radius: 4px;
    width: 840px;
  }
`;

export const Feature = styled.div`
  display: flex;
  display-flex: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding: 0;

  p {
    margin-left: 3px;
  }

  input {
    height: 45px;
    padding: 13px 15px;
    border: 1px solid #dddddd;
    border-radius: 4px;
    width: 269px;
    margin-right: 17px;
  }
`;
