import { Genre } from '../services/genre-list';
import { HStack, Text } from '@chakra-ui/react';
interface Props {
  children: Genre;
  selected: boolean;
  onClick: (genre: string) => void;
}

const AsideItem = ({ onClick, selected, children }: Props) => {
  return (
    <div className="aside-item">
      <HStack>
        <img src={children.image} />
        <Text
          onClick={() => onClick(children.title)}
          as={selected ? 'b' : undefined}
        >
          {children.title}
        </Text>
      </HStack>
    </div>
  );
};

export default AsideItem;
