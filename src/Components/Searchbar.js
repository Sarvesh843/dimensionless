import React, { ReactElement, ReactNode } from "react";
import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightAddon
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

export const SearchBar = () => {
  return (
    <>
      <InputGroup borderRadius={5} marginLeft="350px" size="sm" marginTop="15px" pos="fixed">
        <InputLeftElement
          pointerEvents="none"
          children={<Search2Icon color="gray.600" />}
          
        />
        <Input type="text" placeholder="Search..." border="1px solid #949494" size="sm"  />
        <InputRightAddon
          p={0}
          border="none"
          marginRight="500px" 
        >
          <Button size="sm" borderLeftRadius={0} borderRightRadius={3.3} border="1px solid #949494">
            Search
          </Button>
        </InputRightAddon>
      </InputGroup>
    </>
  );
};
