
import './App.css';
import Form from './components/Form';
import { Flex } from '@chakra-ui/react';
import KeywordInput from './components/KeywordInput';
import React, {useState} from 'react';




function App() {

  return (
    <Flex justify='center' bg='red' direction='row'>
      <Form />
   
      </Flex>

    
  );
}

export default App;
