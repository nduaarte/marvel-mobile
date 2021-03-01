import styled from 'styled-components/native';

export const Container = styled.View`

`;

export const NameChar = styled.Text`
  font-size: 10px;
  font-family: 'Gilroy_medium';
  color: ${({ theme }) => theme.white};
`;

export const NameFantasy = styled.Text`
  font-size: 20px; 
  font-family: 'Gilroy_heavy';
  color: ${({ theme }) => theme.white};
`;
