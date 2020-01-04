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
    > button {
      width: 112px;
      height: 36px;
      font-weight: bold;
      font-size: 14px;
      font-family: Roboto, sans-serif;
      line-height: 16px;
      color: #fff;
      background: ${props => (props.isSubmit ? '#de3b3b' : '#aaa')};
      border: 0;
      border-radius: 4px;
      margin-left: 16px;
      padding-right: 16px;
      text-align: right;

      &:hover {
        cursor: pointer;
      }
    }
  }
`;

export const Form = styled.div`
  background: #fff;
  width: 900px;
  margin-top: 24px;
  padding: 30px 30px;
  border: 0;
  border-radius: 10px;

  span {
    display: flex;
    flex-direction: row;
    margin-top: 20px;
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
  flex: 1;
  margin-right: 15px;
  padding: 0;

  > input {
    height: 45px;
    padding: 13px 15px;
    border: 1px solid #dddddd;
    border-radius: 4px;
    width: 198px;
  }
`;
