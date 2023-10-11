import React, { useState } from 'react';
import { Box, FormControl, FormLabel, Input, Button, useToast, Heading } from '@chakra-ui/react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function UpdateBook() {
    const toast = useToast();
    const { id: bookId } = useParams(); // Rename 'id' to 'bookId'
    console.log(bookId);
  
    const [formData, setFormData] = useState({
      author: '',
      country: '',
      language: '',
      link: '',
      pages: '',
      title: '',
      year: '',
      id: bookId,
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
      axios
        .put(`http://68.178.162.203:8080/application-test-v1.1/books/${bookId}`, formData)
        .then((response) => {
          console.log('Book updated:', response.data);
          toast({
            title: 'Book added successfully',
            status: 'success',
            position: 'top',
          });
        })
        .catch((error) => {
          console.error('Error updating the book:', error);
          toast({
            title: 'Error updating the book',
            status: 'error',
            position: 'top',
          });
        });
    };
  
  

  return (
  
      <Box p={4} w={{base:"100%",lg:"400px"}} m="auto"  border={"2px solid black"}>
        <Heading>Edit Book Data</Heading>
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

export default UpdateBook;
