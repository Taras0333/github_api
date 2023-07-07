import { Flex, Image, Text } from '@chakra-ui/react';
import {
  DM_SERIF,
  LIGHT_BLACK,
  LIGHT_GRAY,
  OPEN_SANS,
} from '../../utilities/const';

const ListCard = ({ listItem }) => {
  const { name, owner, language, description, watchers, stargazers_count } =
    listItem;

  return (
    <Flex marginTop="20px" background="#FFF" padding="40px" borderRadius="16px">
      <Image
        src="/react_image.svg"
        width="128px"
        height="144px"
        marginRight="32px"
        alt="react logo icon"
        borderRadius="4px"
      />
      <Flex
        fontFamily={OPEN_SANS}
        fontSize="16px"
        fontWeight={400}
        color={LIGHT_GRAY}
        lineHeight="25px"
        width="100%"
      >
        <Flex flexDirection="column" gap={1}>
          <Text fontFamily={DM_SERIF} fontSize="22px" color={LIGHT_BLACK}>
            {name}
          </Text>
          <Text>{owner?.login}</Text>
          <Text>{language || 'JavaScript'}</Text>
          <Text>{description}</Text>
        </Flex>
        <Flex
          flexDirection="column"
          marginLeft="auto"
          gap={3}
          justifyContent="end"
          color={LIGHT_BLACK}
          fontWeight={500}
        >
          <Flex gap={1} alignItems="center">
            <Image
              src="/star.svg"
              alt="star icon"
              boxSize="24px"
              marginRight="16px"
            />
            <Text>{stargazers_count}</Text>
            <Text>stars</Text>
          </Flex>
          <Flex gap={1} alignItems="center">
            <Image
              src="/user.svg"
              alt="user icon"
              boxSize="24px"
              marginRight="16px"
            />
            <Text>{watchers}</Text>
            <Text>watchers</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ListCard;
