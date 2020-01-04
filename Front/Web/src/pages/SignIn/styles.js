import styled from 'styled-components';

export const Container = styled.div`
  background: #ee4d64;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  background: #fff;
  padding: 0;
  width: 360px;
  height: 448px;
  border: 0;
  border-radius: 4px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 153px;
    height: 100px;
    margin-bottom: 30px;
  }

  span {
    width: 300px;
    height: 69px;
    margin: 13px 15px;
    display: flex;
    flex-direction: column;

    flex: 1;

    p {
      color: #444;
      font-family: Roboto, sans-serif;
      font-size: 14px;
      line-height: 16px;
      font-weight: bold;
      text-align: left;
      margin: 10px 0;
    }

    input {
      width: 300px;
      height: 45px;
      padding: 13px 15px;
      border: 1px solid #ddd;
      border-radius: 4px;

      &::placeholder {
        color: #999;
        font-size: 16px;
        font-family: Roboto, sans-serif;
      }
    }
  }
  button {
    background: #ee4d64;
    color: #fff;
    font-size: 16px;
    line-height: 19px;
    font-weight: bold;
    margin: 13px 15px;
    width: 300px;
    height: 45px;
    border: 0;
    border-radius: 4px;

    &:hover {
      cursor: pointer;
    }
  }
`;
