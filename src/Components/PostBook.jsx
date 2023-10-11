import React, { useState } from 'react';
import { ChakraProvider, Box, FormControl, FormLabel, Input, Button, useToast } from '@chakra-ui/react';
import axios from 'axios';

function PostBook() {
    const toast=useToast()
  const [formData, setFormData] = useState({
    author: '',
    country: '',
    language: '',
    link: '',
    pages: '',
    title: '',
    year: '',
    id: '',
  });

  const { author, country, language, link, pages, title, year, id } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
      axios.post('http://68.178.162.203:8080/application-test-v1.1/books', formData)
        .then((response) => {
          console.log('Book added:', response.data);
          toast({
            title:"book added succesfully",
            status:"success",
            position:"top"
          })
          
        })
        .catch((error) => {
          console.error('Error adding the book:', error);
        });
  };

  return (
  
      <Box p={4} w={{base:"100%",lg:"400px"}} m="auto"  border={"2px solid black"}>
        <h1>New Book 🔼</h1>
        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel>Author</FormLabel>
            <Input type="text" name="author" value={author} onChange={handleChange} />
          </FormControl>
          <FormControl>
            <FormLabel>Country</FormLabel>
            <Input type="text" name="country" value={country} onChange={handleChange} />
          </FormControl>
          <FormControl>
            <FormLabel>Language</FormLabel>
            <Input type="text" name="language" value={language} onChange={handleChange} />
          </FormControl>
          <FormControl>
            <FormLabel>Link</FormLabel>
            <Input type="text" name="link" value={link} onChange={handleChange} />
          </FormControl>
          <FormControl>
            <FormLabel>Pages</FormLabel>
            <Input type="text" name="pages" value={pages} onChange={handleChange} />
          </FormControl>
          <FormControl>
            <FormLabel>Title</FormLabel>
            <Input type="text" name="title" value={title} onChange={handleChange} />
          </FormControl>
          <FormControl>
            <FormLabel>Year</FormLabel>
            <Input type="text" name="year" value={year} onChange={handleChange} />
          </FormControl>
          <FormControl>
            <FormLabel>ID</FormLabel>
            <Input type="text" name="id" value={id} onChange={handleChange} />
          </FormControl>
          <Button type="submit">Submit</Button>
        </form>
      </Box>
  );
}

export default PostBook;
