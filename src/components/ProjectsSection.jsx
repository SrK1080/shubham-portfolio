import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, Divider } from "@chakra-ui/react";
import Card from "./Card";
import photo4 from "../images/photo4.jpg";
import mobile from "../images/Mobile application.png";
import car from "../images/Automatic Car.png";
import management from "../images/Team Management.png";

const projects = [
  {
    title: "Mobile Application for Visually Impaired individual",
    description:
      "A Java based Mobile Application for Visually Impaired Individuals which detects objects and their distance from the user and delivers the name to the user in auditory format",
    imageSrc: mobile,
    link: "https://github.com/SrK1080/Mobile-Application-for-Visually-Impaired-individual",
  },
  {
    title: "Automatic Car Parking System",
    description:
      "Used Python and complex algorithm techniques to build a automatic car parking system which assists the user to park the vehicle in an empty space.",
    imageSrc: car,
    link: "https://github.com/SrK1080/Automatic-Car-Parking-System",
  },
  {
    title: "Team Management app",
    description:
      "Designed and created an IOS application to manage a team. Select and deploy the user's favorite team members, revealing their information and previous stats whenever a person clicks on a specific player. Utilized Core Data to retrieve the information",
    imageSrc: management,
    link: "https://github.com/SrK1080/Team-Management-app",
  },
  {
    title: " Sklanguage - A Language Display Website ",
    description:
      "Conceptulised Python and Django to create a website which displays the various computer languages once the user is logged in. Front end is created using Javascript, HTML, and CSS.",
    imageSrc: photo4,
    link: "https://github.com/SrK1080/sklanguage",
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#030826"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Divider
        borderColor="white"
        width="70%"
        color="white"
        my={2}
        alignSelf="center"
      />
      <Heading
        size="xl"
        id="projects-section"
        fontFamily="'Times New Roman', Times, serif"
      >
        Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.imageSrc}
            link={project.link}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
