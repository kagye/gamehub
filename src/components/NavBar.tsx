import { HStack, Image, Input, Switch, Text } from '@chakra-ui/react';
import logo from '../assets/logo.webp';

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px"></Image>
      <Input placeholder="Search games..."></Input>
      <Switch colorScheme="teal" size="md" />
      <Text>Dark Mode</Text>
    </HStack>
  );
};

export default NavBar;
