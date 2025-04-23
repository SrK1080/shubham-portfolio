import React, { useEffect } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Text,
  Select,
  Textarea,
  VStack,
  Divider,
} from "@chakra-ui/react";
import * as Yup from "yup";
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const ContactMeSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: { firstName: "", email: "", phonenumber: "", comment: "" },
    onSubmit: (values, actions) => {
      submit("https://example.com/contact", values);
      actions.setSubmitting(true);
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      phonenumber: Yup.string().matches(
        /^\d+$/,
        "Phone number must contain only numbers"
      ),
      comment: Yup.string()
        .min(25, "Comment must be at least 25 characters")
        .required("Comment is required"),
    }),
  });

  useEffect(() => {
    if (response?.type === "success") {
      onOpen("success", response.message);
      formik.resetForm();
    }
  }, [response]);
  return (
    <FullScreenSection
      isDarkBackground
      bgGradient="linear(to-b, #020726, #7a425b, #35728a, #0f5b79)"
      py={5}
      spacing={8}
    >
      <Divider
        borderColor="white"
        width="70%"
        color="white"
        my={2}
        alignSelf="center"
      />
      <Box w="1024px" alignSelf="flex-start" px={10}>
        <Heading
          textAlign="left"
          color="white"
          fontFamily="'Times New Roman', Times, serif"
        >
          Contact me
        </Heading>
      </Box>
      <VStack w="1024px" p={10} alignItems="flex-start">
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl
                isInvalid={formik.touched.firstName && formik.errors.firstName}
              >
                <FormLabel htmlFor="firstName">
                  <Text as="span">
                    Name
                    <Text as="span" color="red" ml={1}>
                      *
                    </Text>
                  </Text>
                </FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  {...formik.getFieldProps("firstName")}
                />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>

              <FormControl
                isInvalid={formik.touched.email && formik.errors.email}
              >
                <FormLabel htmlFor="email">
                  <Text as="span">
                    Email Address
                    <Text as="span" color="red" ml={1}>
                      *
                    </Text>
                  </Text>
                </FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  {...formik.getFieldProps("email")}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>

              <FormControl
                isInvalid={
                  formik.touched.phonenumber && formik.errors.phonenumber
                }
              >
                <FormLabel htmlFor="phonenumber">Phone number</FormLabel>
                <Input
                  id="phonenumber"
                  name="phonenumber"
                  type="tel"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength="12"
                  {...formik.getFieldProps("phonenumber")}
                />
                <FormErrorMessage>{formik.errors.phonenumber}</FormErrorMessage>
              </FormControl>

              {/* <FormControl
                isInvalid={formik.touched.type && formik.errors.type}
              >
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select id="type" name="type" {...formik.getFieldProps("type")}>
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">
                    Open source consultancy session
                  </option>
                  <option value="other">Other</option>
                </Select>
                <FormErrorMessage>{formik.errors.type}</FormErrorMessage>
              </FormControl> */}

              <FormControl
                isInvalid={formik.touched.comment && formik.errors.comment}
              >
                <FormLabel htmlFor="comment">
                  <Text as="span">
                    Your Message
                    <Text as="span" color="red" ml={1}>
                      *
                    </Text>
                  </Text>
                </FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  {...formik.getFieldProps("comment")}
                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>
              <Button
                type="submit"
                colorScheme="purple"
                width="full"
                isLoading={isLoading}
              >
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default ContactMeSection;
