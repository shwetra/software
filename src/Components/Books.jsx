import React, { useState, useEffect } from 'react';
import { Box, Text, Heading, Button, SimpleGrid, Input, Select } from '@chakra-ui/react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Book() {
  const [bookData, setBookData] = useState([]);
  const [searchTitle, setSearchTitle] = useState('');
  const [sortDirection, setSortDirection] = useState('asc');

  useEffect(() => {
    let apiUrl = 'http://68.178.162.203:8080/application-test-v1.1/books';
  
    const params = new URLSearchParams();
    if (searchTitle) {
      params.append('title', searchTitle);
    }
  

  
    if (params.toString()) {
      apiUrl = `${apiUrl}?${params.toString()}`;
    }
  
    axios.get(apiUrl)
      .then((response) => {
        setBookData(response.data.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [searchTitle, sortDirection]);
  

  return (
    <div>
      <Input
        type="text"
        placeholder="Search by title"
        value={searchTitle}
        onChange={(e) => setSearchTitle(e.target.value)}
        mb={4}
      />

      <Select
        value={sortDirection}
        onChange={(e) => setSortDirection(e.target.value)}
        mb={4}
      >
        <option value="asc">Sort Ascending</option>
        <option value="desc">Sort Descending</option>
      </Select>

      <SimpleGrid columns={[1, 2, 3, 4]} w="90%" textAlign={"start"} gap="30px" m="auto">
        {bookData.map((book) => (
          <Box
            borderWidth="1px"
            borderRadius="7px"
            overflow="hidden"
            p={4}
            mb={4}
            boxShadow="md"
            key={book.id}
          >
            <Heading fontSize={"20px"}>
              <strong>Title:</strong> {book.title}
            </Heading>
            <Text fontSize="md" my={2}>
              <strong>Author:</strong> {book.author}
            </Text>
            <Text fontSize="md">
              <strong>Country:</strong> {book.country}
            </Text>
            <Text fontSize="md">
              <strong>Language:</strong> {book.language}
            </Text>
            <Text fontSize="md">
              <strong>Link:</strong> {book.link}
            </Text>
            <Text fontSize="md">
              <strong>Pages:</strong> {book.pages}
            </Text>
            <Text fontSize="md">
              <strong>Year:</strong> {book.year}
            </Text>
            <Text fontSize="md">
              <strong>ID:</strong> {book.id}
            </Text>
            <Link to={`/update/${book.id}`}>
              <Button color={"blue"} border={"1px"} backgroundColor={"green"} pl="10px" pr="10px" borderRadius={"10px"} size="sm" mr={2}>
                Edit
              </Button>
            </Link>
          </Box>
        ))}
      </SimpleGrid>
    </div>
  );
}

export default Book;
