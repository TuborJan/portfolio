import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './chakra/theme';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Skills from './components/Skills/Skills';
import Works from './components/Works/Works';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Home />
      <Skills />
      <Works />
    </ChakraProvider>
  );
}

export default App;
