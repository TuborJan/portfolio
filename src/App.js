import { useEffect, useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './chakra/theme';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Works from './components/Works/Works';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';

function App() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  });

  const isSticky = () => {
    const scrollTop = window.scrollY;
    scrollTop >= 70 ? setSticky(true) : setSticky(false);
  };

  return (
    <ChakraProvider theme={theme}>
      <Header sticky={sticky} />
      <Home sticky={sticky} />
      <About />
      <Skills />
      <Works />
      <Contacts />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
