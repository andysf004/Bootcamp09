import styled from 'styled-components/native';
import {BaseButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #f4f4f4;
`;

export const List = styled.FlatList.attrs({
  showVerticalScrollIndicator: false,
  contentContainerStyle: {padding: 15},
})``;

export const But = styled(BaseButton)``;

export const Status = styled.Text``;
export const Time = styled.Text``;
export const Content = styled.Text``;
