import { Heading } from '@chakra-ui/react';
import { getGenreList, Genre } from '../services/genre-list';
import AsideItem from './AsideItem';

const genres: Genre[] = getGenreList();

const Aside = () => {
  return (
    <div>
      <Heading as="h2" size="lg">
        Genres
      </Heading>
      {genres.map((genre) => (
        <AsideItem key={genre.title} item={genre}></AsideItem>
      ))}
    </div>
  );
};

export default Aside;
