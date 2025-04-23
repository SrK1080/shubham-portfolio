import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Avatar, Icon, Text } from "@chakra-ui/react";

const Header = () => {
  const headerRef = useRef(null);
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (headerRef.current) {
        if (currentScrollY > prevScrollY.current) {
          // Scrolling down - hide header
          headerRef.current.style.transform = "translateY(-200px)";
        } else {
          // Scrolling up - show header
          headerRef.current.style.transform = "translateY(0)";
        }
      }

      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Box
      ref={headerRef}
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transition="transform 0.3s ease-in-out"
      // bgGradient="linear(to-r, #9d50bb, #6e48aa, #ec6f66)"
      bgGradient="linear(to-r, #213448, #4D55CC, #7A73D1, #B5A8D5)"
      backdropFilter="blur(10px)"
      boxShadow="0 2px 4px rgba(0, 0, 0, 0.2)"
      _hover={{
        color: "darkred",
        textShadow: "0 0 5px darkred",
      }}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {/* <HStack spacing={4}>
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
                      backgroundColor: "white",
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
            </HStack> */}

            <HStack>
              <Box
                color="white"
                fontWeight="bold"
                fontSize="2xl" // Larger text
                lineHeight="1" // Prevents extra height from large font
                px="4"
                py="1" // Minimal vertical padding
                borderRadius="md"
                letterSpacing="wide"
                textTransform="uppercase"
              >
                SK
              </Box>
            </HStack>
          </nav>

          {/* Projects, Contact */}
          <nav>
            <HStack spacing={8}>
              <a
                href="/#projects"
                onClick={(e) => {
                  e.preventDefault();
                  handleClick("projects")();
                }}
                style={{ position: "relative" }}
              >
                {/* Hover code */}
                <Box
                  as="span"
                  position="relative"
                  fontWeight="bold"
                  _after={{
                    content: `""`,
                    position: "absolute",
                    width: "100%",
                    transform: "scaleX(0)",
                    height: "2px",
                    bottom: 0,
                    left: 0,
                    backgroundColor: "white",
                    transformOrigin: "bottom right",
                    transition: "transform 0.3s ease-out",
                  }}
                  _hover={{
                    color: "white",
                    _after: {
                      transform: "scaleX(1)",
                      transformOrigin: "bottom left",
                    },
                  }}
                >
                  Projects
                </Box>
              </a>

              <a
                href="/#contact-me"
                onClick={(e) => {
                  e.preventDefault();
                  handleClick("contactme")();
                }}
                style={{ position: "relative" }}
              >
                <Box
                  as="span"
                  position="relative"
                  fontWeight="bold"
                  _after={{
                    content: `""`,
                    position: "absolute",
                    width: "100%",
                    transform: "scaleX(0)",
                    height: "2px",
                    bottom: 0,
                    left: 0,
                    backgroundColor: "white",
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
                  Contact Me
                </Box>
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
