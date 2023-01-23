import {
  Box,
  Flex,
  Container,
  Link,
  Heading,
  Image,
  Button,
  useColorModeValue,
  Center,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

import work1 from './../../img/works/Work1.png';
import work2 from './../../img/works/Work2.png';
import work3 from './../../img/works/Work3.png';

const Works = () => {
  const color = useColorModeValue('#595959', '#e7eaef');
  const bg = useColorModeValue('background.200', 'background.400');
  const buttonBg = useColorModeValue('text.200', 'text.400');
  const buttonColor = useColorModeValue('background.100', 'text.300');

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <Box id={'works'} scrollMarginTop={'70px'} color={color} bg={bg} py={'12'}>
      <Container maxW={'1300px'} px={'10px'} overflow={'hidden'}>
        <Heading
          as={'h2'}
          mb={'12'}
          textAlign={'center'}
          fontSize={{ sm: '3xl', md: '4xl' }}
          fontWeight={'300'}
        >
          Примеры работ
        </Heading>
        <Box data-aos={'fade-right'}>
          <Link
            href={'https://tuborjan.github.io/sneakers/'}
            target={'_blank'}
            display={'block'}
            maxW={'785px'}
            m={'0 auto'}
            _hover={{
              decoration: 'none',
            }}
          >
            <Flex flexDirection={'column'} mb={'20'} textAlign={'center'}>
              <Box
                maxW={{ sm: '585px', md: '685px', lg: '785px' }}
                m={'0 auto'}
                overflow="hidden"
              >
                <Image
                  src={work1}
                  maxW={{ sm: '585px', md: '685px', lg: '785px' }}
                  w={'100%'}
                  mb={'4'}
                  transition={'transform 0.3s ease-in-out'}
                  _hover={{
                    transform: 'scale(1.1)',
                  }}
                />
              </Box>
              <Heading as={'h3'} fontSize={{ sm: '1xl', md: '2xl' }}>
                Магазин кросовок
              </Heading>
            </Flex>
          </Link>
        </Box>
        <Box data-aos={'fade-left'}>
          <Link
            href={'https://tuborjan.github.io/bicycle/'}
            target={'_blank'}
            display={'block'}
            maxW={'785px'}
            m={'0 auto'}
            _hover={{
              decoration: 'none',
            }}
          >
            <Flex flexDirection={'column'} mb={'20'} textAlign={'center'}>
              <Box
                maxW={{ sm: '585px', md: '685px', lg: '785px' }}
                m={'0 auto'}
                overflow="hidden"
              >
                <Image
                  src={work2}
                  maxW={{ sm: '585px', md: '685px', lg: '785px' }}
                  w={'100%'}
                  mb={'4'}
                  transition={'transform 0.3s ease-in-out'}
                  _hover={{
                    transform: 'scale(1.1)',
                  }}
                />
              </Box>

              <Heading as={'h3'} fontSize={{ sm: '1xl', md: '2xl' }}>
                Лендинг
              </Heading>
            </Flex>
          </Link>
        </Box>
        <Box data-aos={'fade-right'}>
          <Link
            href={'https://tuborjan.github.io/designer/'}
            target={'_blank'}
            display={'block'}
            maxW={'785px'}
            m={'0 auto'}
            _hover={{
              decoration: 'none',
            }}
          >
            <Flex flexDirection={'column'} mb={'20'} textAlign={'center'}>
              <Box
                maxW={{ sm: '585px', md: '685px', lg: '785px' }}
                m={'0 auto'}
                overflow="hidden"
              >
                <Image
                  src={work3}
                  maxW={{ sm: '585px', md: '685px', lg: '785px' }}
                  w={'100%'}
                  mb={'4'}
                  transition={'transform 0.3s ease-in-out'}
                  _hover={{
                    transform: 'scale(1.1)',
                  }}
                />
              </Box>
              <Heading as={'h3'} fontSize={{ sm: '1xl', md: '2xl' }}>
                Лендинг
              </Heading>
            </Flex>
          </Link>
        </Box>

        <Center>
          <Link
            _hover={{
              textDecoration: 'none',
            }}
          >
            <Button
              w={'218px'}
              h={'69px'}
              color={buttonColor}
              backgroundColor={buttonBg}
              borderRadius={'25px'}
              _hover={{
                color: buttonBg,
                backgroundColor: buttonColor,
                border: '1px solid',
                borderColor: 'text.200',
              }}
            >
              Больше работ
            </Button>
          </Link>
        </Center>
      </Container>
    </Box>
  );
};

export default Works;
