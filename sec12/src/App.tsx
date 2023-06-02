import { Button, ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";
import theme from "./theme/theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Button colorScheme="teal">Button</Button>
      <p>React Test</p>
    </ChakraProvider>
  );
}

export default App;
