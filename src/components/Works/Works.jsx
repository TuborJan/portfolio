import {
  Box,
  Container,
  Link,
  Heading,
  Image,
  Button,
  useColorModeValue,
  Center,
} from '@chakra-ui/react';

import work1 from './../../img/works/Work1.png';
import work2 from './../../img/works/Work2.png';
import work3 from './../../img/works/Work3.png';

const Works = () => {
  const color = useColorModeValue('#595959', '#e7eaef');
  const bg = useColorModeValue('background.100', 'background.300');
  const buttonBg = useColorModeValue('text.200', 'text.400');
  const buttonColor = useColorModeValue('background.100', 'text.300');

  return (
    <Box id={'skills'} color={color} bg={bg} py={'8'}>
      <Container maxW={'1300px'} px={'10px'}>
        <Heading
          as={'h2'}
          mb={'12'}
          textAlign={'center'}
          fontSize={{ sm: '3xl', md: '4xl' }}
          fontWeight={'300'}
        >
          Мои работы
        </Heading>
        <Link>
          <Image
            src={work1}
            maxW={'785px'}
            w={'100%'}
            m={'0 auto'}
            mb={'32'}
            transition={'transform 0.3s ease-in-out'}
            _hover={{
              transform: 'scale(1.1)',
            }}
          />
        </Link>
        <Link>
          <Image
            src={work2}
            maxW={'785px'}
            w={'100%'}
            m={'0 auto'}
            mb={'32'}
            transition={'transform 0.3s ease-in-out'}
            _hover={{
              transform: 'scale(1.1)',
            }}
          />
        </Link>
        <Link>
          <Image
            src={work3}
            maxW={'785px'}
            w={'100%'}
            m={'0 auto'}
            mb={'32'}
            transition={'transform 0.3s ease-in-out'}
            _hover={{
              transform: 'scale(1.1)',
            }}
          />
        </Link>
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
