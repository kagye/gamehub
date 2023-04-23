import {
  HStack,
  Icon,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';
import logo from '../assets/logo.webp';
import ColourModeSwitch from './ColourModeSwitch';

const NavBar = () => {
  return (
    <HStack
      className="navbar"
      justifyContent="space-between"
      padding="1em"
      marginBottom={'1em'}
    >
      <Image src={logo} boxSize="60px"></Image>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<Icon boxSize="1em" as={Search2Icon} />}
        />
        <Input
          variant="filled"
          borderRadius="2em"
          placeholder="Search games..."
        ></Input>
      </InputGroup>
      <ColourModeSwitch />
    </HStack>
  );
};

export default NavBar;
