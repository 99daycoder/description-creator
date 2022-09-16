import React, { useState } from "react";
import { Flex, Input, Text, Textarea } from "@chakra-ui/react";
export default function KeywordInput({ titleValue, descValue }) {
  const [key, setKey] = useState("");
  const handleChangeKey = (event) => setKey(event.target.value);
  const regex = new RegExp(key, "gi");
  const foundTitle = titleValue?.match(regex);
  const foundDesc = descValue?.match(regex);
  /* 
- To display number of times used in Title:
    We need a state that holds the number-of-times for the title
    How do we get that number?
    Access the title TextArea
    Get the Title Text Area value
    Loop through and check if the Keyword1 exists
    if it does, add 1 to the number-of-times for the title ,state.


    First step:
    Get the title TextArea value.

    Second step:
    Use regular expression.
    1) Get the value of the current keyword text area.
        Create a function to get textArea value.
    2) Compare that with the Text Value from Title TextArea

    3) Compare All Keywords With ALL TextArea values.
      Start by comparing one keyword with Title and Description
        Output: QTY in Title  , QTY in Description

      Then, compare two keywords with Title and Description
      Then, compare all keywords with Title and Description
      Then, compare all keywords with Title and Description and Keywords TextArea

    
*/

  return (
    <Flex>
      <Flex>
        <Input placeholder="Keyword" onChange={handleChangeKey} />
        <Flex width="300px" gap="20px">
          <Flex direction="column" align="center"  >
            <Text>Title:</Text>
            {key?.length > 0 ? (
              <Flex width="50px" height="50px" borderRadius="50" align="center" 
              justify="center" 
              textAlign="center" 
              bg={
                foundTitle?.length < 6
                  ? "green"
                  : foundTitle?.length < 11
                  ? "orange"
                  : "red"
              }
              >
              <Text 
             

              fontWeight="700"
               
              >
                {foundTitle?.length}
              </Text>
              </Flex>
            ) : (
              "0"
            )}
          </Flex>
          <Flex direction="column" align="center">
            <Text>Description:</Text>
            {key?.length > 0 ? (
                 <Flex width="50px" height="50px" borderRadius="50" align="center" 
                 justify="center" 
                 textAlign="center" 
                 bg={
                   foundDesc?.length < 10
                     ? "green"
                     : foundDesc?.length < 21
                     ? "orange"
                     : "red"
                 } >
              <Text
                fontWeight="700"
                
              >
                {foundDesc?.length}
              </Text>
              </Flex>
            ) : (
              "0"
            )}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
