import {
  Box,
  SimpleGrid,
  Flex,
  Container,
  Heading,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';

import html from './../../img/skills/html.png';
import css from './../../img/skills/css-3.png';
import sass from './../../img/skills/sass.png';
import javascript from './../../img/skills/javascript.png';
import chakra from './../../img/skills/chakraui.png';
import react from './../../img/skills/react.png';

const Skills = () => {
  const color = useColorModeValue('text.100', 'text.300');
  const bg = useColorModeValue('background.200', 'background.400');

  return (
    <Box id={'skills'} scrollMarginTop={'70px'} color={color} bg={bg} py={'12'}>
      <Container maxW={'1300px'} px={'10px'}>
        <Flex flexDirection={'column'}>
          <Heading
            as={'h2'}
            m={'0 auto'}
            mb={'12'}
            fontSize={{ sm: '3xl', md: '4xl' }}
            fontWeight={'300'}
          >
            Мои навыки
          </Heading>
          <SimpleGrid columns={3} spacing={20}>
            <Box>
              <Image src={html} m={'0 auto'} />
            </Box>
            <Box>
              <Image src={sass} m={'0 auto'} />
            </Box>
            <Box>
              <Image src={chakra} m={'0 auto'} />
            </Box>
            <Box>
              <Image src={css} m={'0 auto'} />
            </Box>
            <Box>
              <Image src={javascript} m={'0 auto'} />
            </Box>
            <Box>
              <Image src={react} m={'0 auto'} />
            </Box>
          </SimpleGrid>
        </Flex>
      </Container>
    </Box>
  );
};

export default Skills;
