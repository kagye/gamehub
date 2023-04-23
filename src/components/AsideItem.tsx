import { Genre } from '../services/genre-list';
import { HStack, Text } from '@chakra-ui/react';
interface Props {
  item: Genre;
}

const AsideItem = ({ item }: Props) => {
  return (
    <div className="aside-item">
      <HStack>
        <img src={item.image} />
        <Text>{item.title}</Text>
      </HStack>
    </div>
  );
};

export default AsideItem;
