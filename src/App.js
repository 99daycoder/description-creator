import "./App.css";
import Form from "./components/Form";
import { Flex, Image } from "@chakra-ui/react";
import KeywordInput from "./components/KeywordInput";
import React, { useState } from "react";

function App() {
  return (
    <Flex justify="center" justifyItems='center' align='center' direction='column'>
      <Image src='/amazon.png' width='30%' />
      <Form />
    </Flex>
  );
}

export default App;
