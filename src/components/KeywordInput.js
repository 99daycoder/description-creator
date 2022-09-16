import React, { useState } from "react";
import { Flex, Input, Text, Textarea } from "@chakra-ui/react";
export default function KeywordInput({ textValue }) {
  const [key1, setKey1] = useState("");
  const handleChangeKey1 = (event) => setKey1(event.target.value);
  const regex = new RegExp(key1, "g");
  const found = textValue.match(regex);
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
*/

  return (
    <Flex>
      <Flex>
        <Input placeholder="Keyword" onChange={handleChangeKey1} />

        <Text
          bg={found.length < 6 ? "green" : found.length < 11 ? "orange" : "red"}
        >
          {found.length}
        </Text>
      </Flex>
    </Flex>
  );
}
