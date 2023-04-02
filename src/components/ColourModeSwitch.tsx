import { HStack, Text, Switch, useColorMode } from '@chakra-ui/react';

const ColourModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        onChange={toggleColorMode}
        isChecked={colorMode === 'dark'}
        colorScheme="green"
        size="md"
      />
      <Text>Dark Mode</Text>
    </HStack>
  );
};

export default ColourModeSwitch;
