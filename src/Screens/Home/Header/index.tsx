import React from 'react';

import titleIcon from '../../../assets/icons/marvel.png';
import menuIcon from '../../../assets/icons/menu.png';
import searchIcon from '../../../assets/icons/search.png';
import { Container, MenuIcon, TitleIcon, SearchIcon } from './styles';

const Header: React.FC = () => {
  return(
    <Container>
      <MenuIcon source={menuIcon} />
      <TitleIcon source={titleIcon} />
      <SearchIcon source={searchIcon} />
    </Container>
  );
}

export default Header;