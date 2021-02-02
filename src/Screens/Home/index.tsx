import React from 'react';
import { View } from 'react-native';

import Header from './Header';
import Description from './Description';
import CharacterChoice from './CharacterChoice';

const Home: React.FC = () => {
	return (
		<View>
			<Header />
			<Description />
			<CharacterChoice />
		</View>
	);
}

export default Home;