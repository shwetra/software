import React from 'react';
import { ChakraProvider, Flex, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom'; 

function Navbar() {
  return (
    <Flex position={"fixed"} zIndex={"999"} w="100%" align="center" justify="space-between" p={4} bg="blue.100" >
      <Link to="/form">
        <Button colorScheme="teal" variant="outline">
          Add-Book
        </Button>
      </Link>
      <Link to="/">
        <Button colorScheme="teal" variant="outline">
           BooK
        </Button>
      </Link>
      
    </Flex>
  );
}

export default Navbar;
