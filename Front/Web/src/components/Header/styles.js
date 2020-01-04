import styled from 'styled-components';

export const Container = styled.header`
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 0;

  div {
    margin: 20px 30px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      background: none;
      padding-right: 30px;
      border-right: 1px solid #ddd;
    }
  }
`;
export const List = styled.ul`
  display: inline;
  width: 650px;
  padding: 10px;

  a {
    margin: 20px;
    font-size: 15px;
    line-height: 18px;
    color: #999;
    font-weight: bold;
    font-family: Roboto, sans-serif;
  }
`;

export const Profile = styled.div`
  margin: 14px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-size: 14px;
    line-height: 16px;
    color: #666;
    font-weight: bold;
    font-family: Roboto, sans-serif;
    margin-left: 5px;
  }
`;

export const ExitButton = styled.button`
  border: 0;
  background: none;
  color: #de3b3b;
  font-family: Roboto, sans-serif;
  font-size: 14px;
  line-height: 16px;

  &:hover {
    cursor: pointer;
  }
`;
