import { Flex, Input, Text, Textarea } from '@chakra-ui/react'
import React from 'react'


export default function Form() {
  return (
    
        <Flex direction='column'  margin='10px'>
            <Flex direction='row'> 
            <Input placeholder='Title goes here..'></Input> 
            <Text>10/20</Text>
            </Flex>

            <Flex direction='row'> 
            <Textarea placeholder='Description goes here'></Textarea> 
            <Text>10/30</Text>
            </Flex>
        </Flex>
    
  )
}
