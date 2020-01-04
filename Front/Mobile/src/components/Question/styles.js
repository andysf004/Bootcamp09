import styled from 'styled-components/native';
import { BaseButton } from 'react-native-gesture-handler';

export const Container = styled(BaseButton)`
  width: 335px;
  height: 150px;
  background: #fff;
  margin-bottom: 10px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;
export const Title = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;
export const Status = styled.Text`
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: ${props => (props.status ? '#42CB59' : '#999999')};
`;
export const Time = styled.Text`
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  text-align: right;
  color: #666666;
`;

export const Content = styled.Text``;
