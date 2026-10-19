import * as React from "react"
import {
  ChakraProvider,
  defaultConfig,
  createSystem
} from "@chakra-ui/react";

const system = createSystem(defaultConfig, {
 preflight: true
});

export default function ChakraWrapper({ children }) {
  return (
    <ChakraProvider value={system}>
      {children}
    </ChakraProvider>
  );
}