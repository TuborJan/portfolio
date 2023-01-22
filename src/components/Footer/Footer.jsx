import {
  Box,
  Container,
  Center,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

const Footer = () => {
  const color = useColorModeValue('#595959', '#e7eaef');
  const bg = useColorModeValue('background.200', 'background.400');

  return (
    <Box as={'footer'} bg={bg} color={color} mb={{ sm: '7vh', md: '0' }}>
      <Container maxW={'1300px'} py={'10px'}>
        <Center>
          <Text>Dmitry Kalyta 2023</Text>
        </Center>
      </Container>
    </Box>
  );
};

export default Footer;
