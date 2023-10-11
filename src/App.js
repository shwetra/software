import logo from './logo.svg';
import './App.css';
import { Box } from '@chakra-ui/react';
import PostBook from './Components/PostBook';
import Book from './Components/Books';
import AllRoutes from './Components/AllRoutes/AllRoutes';
import Navbar from './Components/Navbar';

function App() {
  return (
    <Box  className="App">
      <Box pb="70px">
      <Navbar/>
      </Box>
     <AllRoutes/>
    </Box>
  );
}

export default App;
