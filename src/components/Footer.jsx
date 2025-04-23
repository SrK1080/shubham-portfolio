import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Flex, HStack, VStack } from "@chakra-ui/react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto:shubhamk28092001@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/SrK1080",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/shubham-karekar-167201205/",
  },
];

const Footer = () => {
  return (
    <Box backgroundColor="#18181b">
      <footer>
        <Flex
          margin="0 auto"
          px={8}
          color="white"
          justifyContent="center"
          alignItems="center"
          maxWidth="1024px"
          height={36}
        >
          <VStack gap="5">
            <HStack spacing={4}>
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Box
                    as="span"
                    position="relative"
                    _after={{
                      content: `""`,
                      position: "absolute",
                      width: "100%",
                      transform: "scaleX(0)",
                      height: "2px",
                      bottom: 0,
                      left: 0,
                      backgroundColor: "red",
                      transformOrigin: "bottom right",
                      transition: "transform 0.3s ease-out",
                    }}
                    _hover={{
                      _after: {
                        transform: "scaleX(1)",
                        transformOrigin: "bottom left",
                      },
                    }}
                  >
                    <FontAwesomeIcon icon={social.icon} size="2x" />
                  </Box>
                </a>
              ))}
            </HStack>
            <p>Shubham • © 2025</p>
          </VStack>
        </Flex>
      </footer>
    </Box>
  );
};
export default Footer;
