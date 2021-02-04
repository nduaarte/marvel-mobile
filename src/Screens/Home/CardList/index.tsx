import React from 'react';

import Card from '../../../Components/Card';
import { Container, Scroll, TitleContainer, TitleCategory, SeeMore } from './styles';

interface PropsTypes {
  titleCategory: string;
  category: Array<Types>;
}

interface Types {
  name: string;
  alterEgo: string;
  imagePath: File;
}

const CardList: React.FC<PropsTypes> = ({ titleCategory, category }) => {

  const cardGenerator = category.map(({ name, alterEgo, imagePath }, index) => (
    <Card
      key={index}
      nameChar={name}
      nameFantasy={alterEgo}
      imageBackgrond={imagePath} 
    />
  ));

  return (
    <Container>
      <TitleContainer>
        <TitleCategory>{titleCategory}</TitleCategory>
        <SeeMore>Ver tudo</SeeMore>
      </TitleContainer>

      <Scroll horizontal>
        {cardGenerator}
      </Scroll>
    </Container>
  );
}

export default CardList;