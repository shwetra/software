import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';

import Book from '../Books';
import PostBook from '../PostBook';
import UpdateBook from '../UpdateBook';

function AllRoutes() {
  return (
    <Routes>
     
          <Route path="/form" exact element={<PostBook/>} />
          <Route path="/" element={<Book/>} />
          <Route path="/update/:id" element={<UpdateBook/>} />
      
    </Routes>
  );
}

export default AllRoutes;
