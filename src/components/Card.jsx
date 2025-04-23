import {
  Heading,
  HStack,
  Image,
  Text,
  VStack,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import React from "react";

const Card = ({ title, description, imageSrc, link }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

  return (
    <VStack
      borderRadius="md"
      overflow="hidden"
      boxShadow="lg"
      bg="white"
      align="start"
      spacing={4}
    >
      <Image
        src={imageSrc}
        alt={title}
        objectFit="cover"
        width="100%"
        height="400px"
      />
      <VStack spacing={2} p={4} align="start">
        <Heading as="h3" size="md" color="black">
          {title}
        </Heading>
        <Text color="gray.700">{description}</Text>
        <HStack pt={2} fontWeight="bold">
          <ButtonGroup variant="subtle">
            <Button
              backgroundColor="green.700"
              rounded="full"
              fontWeight="bold"
              boxShadow="0 8px 4px rgba(0, 0, 0, 0.8)"
              border="2px solid white"
              onClick={() => (window.location.href = link)}
              gap="2"
            >
              Learn More <FontAwesomeIcon icon={faArrowRight} size="1x" />
            </Button>
          </ButtonGroup>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
