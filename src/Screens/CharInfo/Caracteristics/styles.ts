import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin: 45px 15px 0;
`;

export const SubContainer = styled.View`
  align-items: center;
  justify-content: space-between;
  height: 45px;
`;

export const  Icon = styled.Text`
`;

export const  Description = styled.Text`
  font-family: Gilroy_medium;
  font-size: 12px;
  color: ${({ theme }) => theme.white};
`;

