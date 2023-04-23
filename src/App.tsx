import { Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import Aside from './components/Aside';
import { useState } from 'react';
import Games from './components/Games';

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState('');
  const handleOnGenreSelected = (genre: string) => {
    setSelectedGenre(genre);
  };

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      gridTemplateColumns={'auto 1fr'}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">
          <Aside
            onClick={handleOnGenreSelected}
            selectedGenre={selectedGenre}
          ></Aside>
        </GridItem>
      </Show>
      <GridItem area="main">
        <Games selectedGenre={selectedGenre}></Games>
      </GridItem>
    </Grid>
  );
};

export default App;
