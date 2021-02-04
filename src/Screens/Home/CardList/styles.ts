import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: column;
  margin-top: 35px;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  margin: 0 20px;
  justify-content: space-between;
`;

export const TitleCategory = styled.Text`
  font-family: 'Gilroy_bold';
  font-size: 18px;
  color: ${({ theme }) => theme.red};
`;

export const SeeMore = styled.Text`
  font-family: 'Gilroy_medium';
  font-size: 14px;
  color: ${({ theme }) => theme.gray};
`;


export const Scroll = styled.ScrollView``;