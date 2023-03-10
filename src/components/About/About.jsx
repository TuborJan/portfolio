import {
  Box,
  Container,
  Center,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  const color = useColorModeValue('#595959', '#e7eaef');
  const bg = useColorModeValue('background.200', 'background.400');

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <Box id={'about'} bg={bg} color={color} scrollMarginTop={'70px'}>
      <Container
        maxW={'600px'}
        py={'12'}
        textAlign={'center'}
        overflow={'hidden'}
      >
        <Center flexDirection={'column'} data-aos={'fade-right'}>
          <Heading
            as={'h2'}
            mb={'6'}
            textAlign={'center'}
            fontSize={{ sm: '3xl', md: '4xl' }}
            fontWeight={'300'}
          >
            Обо мне
          </Heading>
          <Text mb={'6'} fontSize={'1.25rem'}>
            Здравствуйте, меня зовут Дмитрий - я фронтенд разработчик.
            Интересуюсь веб разработкой и всем, что с ней связано.
          </Text>
          <Text fontSize={'1.25rem'}>
            Буду рад поработать над вашим проектом.
          </Text>
        </Center>
      </Container>
    </Box>
  );
};

export default About;
