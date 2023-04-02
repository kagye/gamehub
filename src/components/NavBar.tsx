import { HStack, Image, Input } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import ColourModeSwitch from './ColourModeSwitch';

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px"></Image>
      <Input placeholder="Search games..."></Input>
      <ColourModeSwitch></ColourModeSwitch>
    </HStack>
  );
};

export default NavBar;
