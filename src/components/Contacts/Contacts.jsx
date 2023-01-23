import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Link,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';

import telegram from './../../img/contacts/telegram.svg';
import whatsapp from './../../img/contacts/whatsapp.svg';
import instagram from './../../img/contacts/instagram.svg';
import linkedin from './../../img/contacts/linkedin.svg';

const Contacts = () => {
  const color = useColorModeValue('#595959', '#e7eaef');
  const bg = useColorModeValue('background.100', 'background.300');

  return (
    <Box
      id={'contacts'}
      scrollMarginTop={'70px'}
      color={color}
      bg={bg}
      py={'12'}
    >
      <Container maxW={'1300px'} px={'10px'} mb={{ sm: '12', md: '8' }}>
        <Heading as={'h2'} mb={'12'} textAlign={'center'}>
          Контакты
        </Heading>
        <Flex maxW={'400px'} m={'0 auto'} justifyContent={'space-between'}>
          <Link
            href="https://t.me/TuborJan"
            target={'_blank'}
            maxW={'72px'}
            textAlign={'center'}
            transition={'transform 0.3s ease-in-out'}
            _hover={{
              transform: 'scale(1.1)',
            }}
          >
            <Box maxW={{ sm: '50px', md: '60px' }} m={'0 auto'}>
              <Image src={telegram} w={'100%'} />
            </Box>
            <Text>telegram</Text>
          </Link>
          <Link
            href="https://wa.me/79774512203"
            target={'_blank'}
            maxW={'72px'}
            textAlign={'center'}
            transition={'transform 0.3s ease-in-out'}
            _hover={{
              transform: 'scale(1.1)',
            }}
          >
            <Box maxW={{ sm: '50px', md: '60px' }} m={'0 auto'}>
              <Image src={whatsapp} w={'100%'} />
            </Box>
            <Text>whatsapp</Text>
          </Link>
          <Link
            href="https://www.linkedin.com/in/dmitry-kalyta-1342a8263/"
            target={'_blank'}
            maxW={'72px'}
            textAlign={'center'}
            transition={'transform 0.3s ease-in-out'}
            _hover={{
              transform: 'scale(1.1)',
            }}
          >
            <Box maxW={{ sm: '50px', md: '60px' }} m={'0 auto'}>
              <Image src={linkedin} w={'100%'} />
            </Box>
            <Text>linkedin</Text>
          </Link>
          <Link
            href="https://www.instagram.com/tubor_jan/"
            target={'_blank'}
            maxW={'72px'}
            textAlign={'center'}
            transition={'transform 0.3s ease-in-out'}
            _hover={{
              transform: 'scale(1.1)',
            }}
          >
            <Box maxW={{ sm: '50px', md: '60px' }} m={'0 auto'}>
              <Image src={instagram} w={'100%'} />
            </Box>
            <Text>instagram</Text>
          </Link>
        </Flex>
      </Container>
    </Box>
  );
};

export default Contacts;
