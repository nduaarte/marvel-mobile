import React from 'react';
import { View } from 'react-native';

import Header from './Header';
import Description from './Description';
import CharacterChoice from './CharacterChoice';
import CardList from './CardList';

const Home: React.FC = () => {
	return (
		<View>
			<Header />
			<Description />
			<CharacterChoice />
			<CardList />
		</View>
	);
}

export default Home;