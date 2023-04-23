import { HStack, Heading, Select } from '@chakra-ui/react';
import { useState } from 'react';
interface Props {
  selectedGenre: string;
}
const Games = ({ selectedGenre }: Props) => {
  const [platform, setPlatform] = useState('');

  const selectedTitle = `${platform} ${selectedGenre ?? ''} Games`;

  const handlePlatformChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setPlatform(event.target.value);
  };

  return (
    <section>
      <Heading as="h1" size={'2xl'}>
        {selectedTitle}
      </Heading>
      <HStack>
        <Select
          className="open"
          width="auto"
          variant="filled"
          placeholder="Platforms"
          onChange={handlePlatformChange}
        >
          <option value="PC">PC</option>
          <option value="PlayStation">PlayStation</option>
          <option value="Xbox">Xbox</option>
          <option value="iOS">iOS</option>
          <option value="Android">Android</option>
          <option value="Apple Macintosh">Apple Macintosh</option>
          <option value="Linux">Linux</option>
          <option value="Nintendo">Nintendo</option>
          <option value="Atari">Atari</option>
          <option value="Commodore / Amiga">Commodore / Amiga</option>
          <option value="SEGA">SEGA</option>
          <option value="3DO">3DO</option>
          <option value="Neo Geo">Neo Geo</option>
          <option value="Web">Web</option>
        </Select>
        <Select width="auto" variant="filled" placeholder="Order by:">
          <option value="Relevance">Relevance</option>
          <option value="Date added">Date added</option>
          <option value="Name">Name</option>
          <option value="Release date">Release date</option>
          <option value="Popularity">Popularity</option>
          <option value="Average rating">Average rating</option>
        </Select>
      </HStack>
    </section>
  );
};

export default Games;
