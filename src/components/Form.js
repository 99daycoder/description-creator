import { Flex, Input, Text, Textarea } from "@chakra-ui/react";
import React from "react";
import KeywordInput from "./KeywordInput";

const InputField = ({ placeholder, value, onChange, charLimit }) => {
  return (
    <Flex direction="row">
      <Textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      ></Textarea>
      <Text bg={value.length > charLimit ? "red" : "none"}>
        {value.length}/{charLimit}
      </Text>
    </Flex>
  );
};

export default function Form() {
  const [valueTitle, setValueTitle] = React.useState("");
  const [valueDescription, setValueDescription] = React.useState("");
  const [valueKeywords, setValueKeywords] = React.useState("");
  const handleChangeTitle = (event) => setValueTitle(event.target.value);
  const handleChangeDescription = (event) =>
    setValueDescription(event.target.value);
  const handleChangeKeywords = (event) => setValueKeywords(event.target.value);
  return (
    <Flex direction="column" margin="10px">
      <InputField
        placeholder="Type your title here"
        value={valueTitle}
        onChange={handleChangeTitle}
        charLimit={200}
      />
      <InputField
        placeholder="Descrition goes here"
        value={valueDescription}
        onChange={handleChangeDescription}
        charLimit={2000}
      />
      <InputField
        placeholder="Type your backend keywords here"
        value={valueKeywords}
        onChange={handleChangeKeywords}
        charLimit={250}
      />
      <KeywordInput titleValue={valueTitle} descValue={valueDescription} />
      <KeywordInput titleValue={valueTitle} descValue={valueDescription} />
      <KeywordInput titleValue={valueTitle} descValue={valueDescription} />
      <KeywordInput titleValue={valueTitle} descValue={valueDescription} />
      <KeywordInput titleValue={valueTitle} descValue={valueDescription} />
    </Flex>
  );
}

// <Flex direction="row">
//   <Input
//     placeholder="Title goes here.."
//     value={value}
//     onChange={handleChange}
//   ></Input>
//   <Text bg={value.length > 20 ? "red" : "none"}>{value.length}/20</Text>
// </Flex>
