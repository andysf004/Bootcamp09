import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #f2f2f2;
  justify-content: flex-start;
  align-items: center;
`;

export const Body = styled.View`
  background: #fff;
  width: 335px;
  margin: 22px 20px;
  padding: 20px;

  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 300px;
`;
export const Text = styled.Text`
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: #444444;
`;

export const Time = styled.Text`
  font-size: 14px;
  line-height: 16px;
  color: #666;
`;

export const Content = styled.Text`
  margin: 16px 0 20px;
  font-size: 14px;
  line-height: 26px;
  color: #666666;
`;
