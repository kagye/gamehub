import { Heading } from '@chakra-ui/react';
import { getGenreList, Genre } from '../services/genre-list';
import AsideItem from './AsideItem';

const genres: Genre[] = getGenreList();
interface Props {
  selectedGenre: string;
  onClick: (genre: string) => void;
}
const Aside = ({ onClick, selectedGenre }: Props) => {
  return (
    <div className="aside">
      <Heading as="h2" size="lg">
        Genres
      </Heading>
      {genres.map((genre) => (
        <AsideItem
          onClick={onClick}
          key={genre.title}
          selected={genre.title.toLowerCase() === selectedGenre.toLowerCase()}
        >
          {genre}
        </AsideItem>
      ))}
    </div>
  );
};

export default Aside;
