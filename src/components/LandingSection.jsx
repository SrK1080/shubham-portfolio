import React from "react";
import { useEffect, useState } from "react";
import {
  Heading,
  VStack,
  HStack,
  Box,
  Image,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import portfolio from "../images/Portfolio Image.jpg";
import backGround from "../images/background6.jpg";
import FullScreenSection from "./FullScreenSection";
import { motion } from "framer-motion";
<link
  href="https://fonts.googleapis.com/css2?family=Lobster&display=swap"
  rel="stylesheet"
></link>;

const MotionHeading = motion(Heading);
const greeting = "Hello, I am Shubham!";
const bio1 = "A frontend developer \n specialised in React";
const bio2 = "A Frontend Developer";
const bio3 =
  "I am a graduate student from University College Cork, Ireland.\nMy Expertise is in Creating Mobile Applications & designing websites";

const jobTitles = [
  ["A", "Frontend", "Developer"],
  ["A", "Web", "Developer"],
  ["An", "Application", "Developer"],
];

//For the animation of the roles
const BioAnimator = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [visibleText, setVisibleText] = useState([]);
  const [isDeleting, setIsDeleting] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  const currentTitle = jobTitles[currentTitleIndex];

  useEffect(() => {
    let timeout;

    if (isDeleting) {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setVisibleText((prev) => {
            const flat = prev.join(" ");
            return [flat.slice(0, charIndex - 1)];
          });
          setCharIndex((prev) => prev - 1);
        }, 100);
      } else {
        // Start typing new title
        setIsDeleting(false);
        setVisibleText([]);
        setCharIndex(0);
      }
    } else {
      const fullText = currentTitle.join(" ");
      if (charIndex <= fullText.length) {
        timeout = setTimeout(() => {
          setVisibleText([fullText.slice(0, charIndex)]);
          setCharIndex((prev) => prev + 1);
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
          setCurrentTitleIndex((prev) => (prev + 1) % jobTitles.length);
        }, 2000); // Stay for 2s before deleting
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentTitleIndex]);

  return (
    <MotionHeading
      size="xl"
      color="#ECEFCA"
      fontFamily="'Playfair Display', serif"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      {visibleText}
    </MotionHeading>
  );
};

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    backgroundImage={`linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${backGround})`}
    backgroundSize="cover"
    backgroundPosition="center"
    backgroundRepeat="no-repeat"
  >
    <HStack gap="20">
      <VStack>
        <Box
          w="400px"
          h="400px"
          borderRadius="full"
          border="8px solid white"
          outline="4px solid darkblue"
          outlineOffset="6px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Image
            src={portfolio}
            w="350px"
            h="350px"
            borderRadius="full"
            objectFit="cover"
          />
        </Box>
      </VStack>
      <VStack gap="10">
        <VStack gap="2">
          <Heading
            fontFamily="'Times New Roman', Times, serif"
            size="2xl"
            color="white"
          >
            {greeting}
          </Heading>

          <Box minH="50px">
            <BioAnimator />
          </Box>
        </VStack>
        <VStack>
          <Heading
            fontFamily="'Times New Roman', Times, serif"
            size="md"
            color="white"
            textAlign="center"
            width="70"
          >
            {bio3.split("\n").map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </Heading>
        </VStack>
        <VStack>
          <ButtonGroup variant="subtle">
            <Button
              rounded="xl"
              height="50px"
              width="180x"
              fontFamily="'Times New Roman', Times, serif"
              fontSize="lg"
              backgroundColor="#052339"
              color="white"
              border="2px solid white"
              boxShadow="0 2px 4px rgba(0, 0, 0, 0.2)"
              onClick={() =>
                (window.location.href =
                  "https://drive.google.com/file/d/1ZxRwRkFCs-kJf5kpCM3gmb8CniikRoAl/view?usp=sharing")
              }
            >
              Resume
            </Button>
          </ButtonGroup>
        </VStack>
      </VStack>
    </HStack>
  </FullScreenSection>
);

export default LandingSection;
