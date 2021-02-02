import styled from 'styled-components/native';

export const BackgroundImage = styled.ImageBackground`
  width: 140px;
  height: 230px;
  margin: 8px;
`;

export const TextContainer = styled.View`
  margin-top: 115%;
  margin-left: 10%;
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

