import React from 'react';

import { Container, Tittle, ScrollMovies, MovieImage } from './styles';

interface PropsTypes {
  movie: Array<string>;
}

import img1 from '../../../assets/movies/iron-man-1.jpg';
import img2 from '../../../assets/movies/iron-man-2.jpg';
import img3 from '../../../assets/movies/iron-man-3.jpg';

const Movies: React.FC<PropsTypes> = ({ movie }) => {

  // const refinedMovie = movie.map((item: any, index) => <MovieImage key={index} source={item}/>);

  return(
    <Container>
      <Tittle>Filmes</Tittle>

      <ScrollMovies horizontal>
        <MovieImage source={img1}/>
        <MovieImage source={img2}/>
        <MovieImage source={img3}/>
      </ScrollMovies>
    </Container>
  );
}

export default Movies;