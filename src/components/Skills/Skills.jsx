import {
  Box,
  Flex,
  Container,
  Accordion,
  AccordionPanel,
  AccordionIcon,
  AccordionItem,
  AccordionButton,
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
import figma from './../../img/skills/figma.png';
import photoshop from './../../img/skills/photoshop.png';

const Skills = () => {
  const color = useColorModeValue('#595959', '#e7eaef');
  const bg = useColorModeValue('background.100', 'background.300');

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
            Навыки
          </Heading>
          <Accordion allowToggle={true}>
            <Flex
              justifyContent={'space-around'}
              flexDirection={{
                sm: 'column',
                md: 'column',
                lg: 'column',
                xl: 'row',
              }}
            >
              <AccordionItem border={'none'}>
                <AccordionButton justifyContent={'center'}>
                  <Flex
                    w={'400px'}
                    alignItems={'center'}
                    justifyContent={'space-around'}
                  >
                    <Box w={'10'}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill={color}
                          d="M6,6A2,2,0,0,1,8,4,1,1,0,0,0,8,2,4,4,0,0,0,4,6V9a2,2,0,0,1-2,2,1,1,0,0,0,0,2,2,2,0,0,1,2,2v3a4,4,0,0,0,4,4,1,1,0,0,0,0-2,2,2,0,0,1-2-2V15a4,4,0,0,0-1.38-3A4,4,0,0,0,6,9Zm16,5a2,2,0,0,1-2-2V6a4,4,0,0,0-4-4,1,1,0,0,0,0,2,2,2,0,0,1,2,2V9a4,4,0,0,0,1.38,3A4,4,0,0,0,18,15v3a2,2,0,0,1-2,2,1,1,0,0,0,0,2,4,4,0,0,0,4-4V15a2,2,0,0,1,2-2,1,1,0,0,0,0-2Z"
                        />
                      </svg>
                    </Box>
                    <Box as="span" maxW={'300px'} flex={'1'} textAlign="left">
                      Фронтенд разработка
                    </Box>
                  </Flex>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel maxW={'400px'} p={6} m={'0 auto'}>
                  <Flex justifyContent={'center'} flexWrap={'wrap'} gap={16}>
                    <Box maxW={{ sm: '50px', md: '60px' }}>
                      <Image src={html} w={'100%'} />
                    </Box>
                    <Box maxW={{ sm: '50px', md: '60px' }}>
                      <Image src={css} w={'100%'} />
                    </Box>
                    <Box maxW={{ sm: '50px', md: '60px' }}>
                      <Image src={sass} w={'100%'} />
                    </Box>
                    <Box maxW={{ sm: '50px', md: '60px' }}>
                      <Image src={javascript} w={'100%'} />
                    </Box>
                    <Box maxW={{ sm: '50px', md: '60px' }}>
                      <Image src={react} w={'100%'} />
                    </Box>
                    <Box maxW={{ sm: '50px', md: '60px' }}>
                      <Image src={chakra} w={'100%'} />
                    </Box>
                  </Flex>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem border={'none'}>
                <AccordionButton justifyContent={'center'}>
                  <Flex
                    w={'400px'}
                    alignItems={'center'}
                    justifyContent={'space-around'}
                  >
                    <Box w={'10'}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill={color}
                          d="M7.42,15.54a1,1,0,0,0,0,1.41,1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.41A1,1,0,0,0,7.42,15.54Zm0-8.49a1,1,0,0,0,0,1.41,1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.41A1,1,0,0,0,7.42,7.05Zm4.95,10a1,1,0,1,0,1,1A1,1,0,0,0,12.37,17Zm-6-6a1,1,0,1,0,1,1A1,1,0,0,0,6.37,11Zm6-6a1,1,0,1,0,1,1A1,1,0,0,0,12.37,5Zm3.54,2.05a1,1,0,1,0,1.41,0A1,1,0,0,0,15.91,7.05Zm6.3,0a11,11,0,1,0-7.85,15.74,3.87,3.87,0,0,0,2.5-1.65A4.2,4.2,0,0,0,17.47,18a5.65,5.65,0,0,1-.1-1,5,5,0,0,1,3-4.56,3.84,3.84,0,0,0,2.06-2.25A4,4,0,0,0,22.21,7.08Zm-1.7,2.44a1.9,1.9,0,0,1-1,1.09A7,7,0,0,0,15.37,17a7.3,7.3,0,0,0,.14,1.4,2.16,2.16,0,0,1-.31,1.65,1.79,1.79,0,0,1-1.21.8,8.72,8.72,0,0,1-1.62.15,9,9,0,0,1-9-9.28A9.05,9.05,0,0,1,11.85,3h.51a9,9,0,0,1,8.06,5A2,2,0,0,1,20.51,9.52ZM12.37,11a1,1,0,1,0,1,1A1,1,0,0,0,12.37,11Z"
                        />
                      </svg>
                    </Box>
                    <Box as="span" maxW={'300px'} flex={'1'} textAlign="left">
                      Дизайн
                    </Box>
                  </Flex>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel maxW={'320px'} p={6} m={'0 auto'}>
                  <Flex justifyContent={'center'} flexWrap={'wrap'} gap={16}>
                    <Box maxW={{ sm: '50px', md: '60px' }}>
                      <Image src={figma} w={'100%'} />
                    </Box>
                    <Box maxW={{ sm: '50px', md: '60px' }}>
                      <Image src={photoshop} w={'100%'} />
                    </Box>
                  </Flex>
                </AccordionPanel>
              </AccordionItem>
            </Flex>
          </Accordion>
        </Flex>
      </Container>
    </Box>
  );
};

export default Skills;
