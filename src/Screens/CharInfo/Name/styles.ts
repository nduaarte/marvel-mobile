import styled from 'styled-components/native';

export const Container = styled.View`
  margin: 80% 20px 0;
`;

export const NameChar = styled.Text`
  font-size: 20px;
  font-family: 'Gilroy_medium';
  color: ${({ theme }) => theme.white};
`;

export const NameFantasy = styled.Text`
  font-size: 30px; 
  font-family: 'Gilroy_heavy';
  color: ${({ theme }) => theme.white};
`;
