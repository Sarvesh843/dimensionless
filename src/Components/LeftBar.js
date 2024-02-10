import { Flex, List,ListIcon,ListItem, Image } from "@chakra-ui/react";
import React from "react";
import { FaBeer } from "react-icons/fa";

const LeftBar = () => {
  return (
    <>
      <Flex marginLeft="20px">
        <Flex
          width="300px"
          bg="white.500"
          height="100vh"
          position="fixed"
          borderRadius="4px"
          boxShadow="dark-lg"
        >
          <List spacing={3} marginLeft="10px" paddingTop="10px">
            <Image src="Images/trade.jpg" alt="Tradeverse" height="80px" width="280px"></Image>
            <ListItem>
              <ListIcon as={FaBeer} color="green.500" />
              News Quants
            </ListItem>
            <ListItem>
              <ListIcon as={FaBeer} color="green.500" />
              Real Economic Indicators
            </ListItem>
            <ListItem>
              <ListIcon as={FaBeer} color="green.500" />
              One Score
            </ListItem>
            <ListItem>
              <ListIcon as={FaBeer} color="green.500" />
              Alert Central
            </ListItem>
            <ListItem>
              <ListIcon as={FaBeer} color="green.500" />
              Customer Support
            </ListItem>
          </List>
        </Flex>
      </Flex>
    </>
  );
};

export default LeftBar;
