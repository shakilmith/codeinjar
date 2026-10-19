
import * as React from "react"

import {
  Box,
  Button,
  Heading,
  Text,
} from "@chakra-ui/react";

import ChakraWrapper from "../components/ChakraWrapper";

export default function Demo() {
  return (
    <ChakraWrapper>
      <Box p="6" borderWidth="1px" borderRadius="lg">
        <Heading size="lg">Join us</Heading>

        <Text mt="2">
          Create your account today.
        </Text>

        <Button mt="4" colorPalette="teal">
          Sign up
        </Button>
      </Box>
    </ChakraWrapper>
  );
}
        