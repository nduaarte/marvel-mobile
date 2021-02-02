import styled from 'styled-components/native';

export const Container = styled.View`
  margin: 20px;
`;

export const WelcomeText = styled.Text`
	font-size: 14px;
	font-family: 'Gilroy_semibold';
	color: ${({ theme }) => theme.gray};
`;

export const ChooseText = styled.Text`
	font-size: 32px;
	font-family: 'Gilroy_heavy';
	width: 80%;
	color: ${({ theme }) => theme.dark};
`;

