import styled from 'styled-components';
import { BaseButton } from 'react-native-gesture-handler';

export const Container = styled(BaseButton)`
  width: 335px;
  height: 45px;
  background: #ee4e62;
  border-radius: 4px;
  margin: 24px;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
