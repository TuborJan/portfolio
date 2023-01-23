import {
  Box,
  Container,
  Link,
  Flex,
  Heading,
  Image,
  Text,
  Button,
  Center,
  keyframes,
  useColorModeValue,
  usePrefersReducedMotion,
} from '@chakra-ui/react';
import img from './../../img/home/developer-activity-animate.svg';

const Home = ({ sticky }) => {
  const color = useColorModeValue('#595959', '#e7eaef');
  const bg = useColorModeValue('background.100', 'background.300');
  const buttonBg = useColorModeValue('text.200', 'text.400');
  const buttonColor = useColorModeValue('background.100', 'text.300');

  const arrowAnimation = keyframes`
    0% {transform: translateY(0px)}
    25% {transform: translateY(-10px)}
    50% {transform: translateY(0px)}
    75% {transform: translateY(10px)}
    100% {transform: translateY(0px)}
  `;

  const prefersReducedMotion = usePrefersReducedMotion();

  const animation = prefersReducedMotion
    ? undefined
    : `${arrowAnimation} infinite 3s linear`;

  return (
    <Center
      id={'home'}
      minH={'90vh'}
      h={'auto'}
      py={{ sm: '0', md: '8' }}
      mt={{ sm: '0', md: sticky ? '100px' : '0' }}
      color={color}
      bgColor={bg}
      letterSpacing={'1px'}
    >
      <Container maxW={'1300px'} px={'10px'}>
        <Flex
          justifyContent={'space-between'}
          py={'0'}
          flexDirection={{
            sm: 'column-reverse',
            md: 'row',
            lg: 'row',
            xl: 'row',
          }}
        >
          <Flex
            flexDirection={{ sm: 'column', md: 'row' }}
            alignItems={{ sm: 'center', md: 'normal' }}
            justifyContent={'space-between'}
            maxW={{ sm: '420px', md: '3xl' }}
            w={{ md: '2xl' }}
            m={{ sm: '0 auto', md: '0' }}
          >
            <Flex
              mr={{ sm: '0', md: '24' }}
              py={{ sm: '3', md: '28' }}
              flexDirection={{ sm: 'row', md: 'column' }}
              alignItems={{ sm: 'center', md: 'normal' }}
              gap={{ sm: '5', md: '0' }}
            >
              <Link href="https://t.me/TuborJan" target={'_blank'}>
                <Box
                  mb={{ sm: '0', md: '32px' }}
                  transition={'transform 0.3s ease-in-out'}
                  _hover={{
                    transform: 'scale(1.2)',
                  }}
                >
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.3333 13L15.2222 21L25.8889 33L33 1L1 15L8.11111 19L11.6667 31L17 23"
                      stroke={color}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Box>
              </Link>
              <Link href="https://github.com/TuborJan" target={'_blank'}>
                <Box
                  mb={{ sm: '0', md: '32px' }}
                  transition={'transform 0.3s ease-in-out'}
                  _hover={{
                    transform: 'scale(1.2)',
                  }}
                >
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.2941 29.429C4.2 31.9287 4.2 24.9653 1 24.0726M23.5882 33V26.7508C23.5882 24.9653 23.7765 24.2511 22.6471 23.1798C27.9176 22.6442 33 20.6802 33 12.4669C32.9977 10.3332 32.1201 8.2841 30.5529 6.75339C31.2879 4.9 31.2203 2.84609 30.3647 1.03984C30.3647 1.03984 28.2941 0.504196 23.7765 3.36097C19.9501 2.41571 15.9323 2.41571 12.1059 3.36097C7.58823 0.504196 5.51765 1.03984 5.51765 1.03984C4.66208 2.84609 4.59442 4.9 5.32941 6.75339C3.76226 8.2841 2.88464 10.3332 2.88235 12.4669C2.88235 20.6802 7.96471 22.6442 13.2353 23.1798C12.1059 24.2511 12.1059 25.3224 12.2941 26.7508V33"
                      stroke={color}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Box>
              </Link>
              <Link
                href="https://www.linkedin.com/in/dmitry-kalyta-1342a8263"
                target={'_blank'}
              >
                <Box
                  transition={'transform 0.3s ease-in-out'}
                  _hover={{
                    transform: 'scale(1.2)',
                  }}
                >
                  <svg
                    width="34"
                    height="34"
                    xmlns="http://www.w3.org/2000/svg"
                    dataName="Layer 1"
                    viewBox="2 2 20 20"
                  >
                    <path
                      fill={color}
                      d="M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48h0a1.56,1.56,0,1,1,0-3.12,1.57,1.57,0,1,1,0,3.12ZM18.91,18.74h-3V13.91c0-1.21-.43-2-1.52-2A1.65,1.65,0,0,0,12.85,13a2,2,0,0,0-.1.73v5h-3s0-8.18,0-9h3V11A3,3,0,0,1,15.46,9.5c2,0,3.45,1.29,3.45,4.06Z"
                    />
                  </svg>
                </Box>
              </Link>
            </Flex>
            <Box
              maxW={{ md: '400px', lg: '3xl' }}
              py={{ sm: '2', md: '12' }}
              textAlign={{ sm: 'center', md: 'start' }}
            >
              <Heading
                as={'h1'}
                fontSize={{ sm: '3xl', md: '5xl' }}
                fontWeight={'300'}
              >
                Дмитрий Калита
              </Heading>
              <Flex
                alignItems={'center'}
                justifyContent={{ sm: 'center', md: 'start' }}
                py={{ sm: '2', md: '0' }}
              >
                <Text
                  as={'span'}
                  width={{ sm: '40px', md: '64px' }}
                  mr={{ sm: '3', md: '5' }}
                  my={{ sm: '3', md: '7' }}
                  borderBottom={`1px solid`}
                  borderColor={color}
                ></Text>
                <Text fontSize={{ sm: '1rem', md: '2xl' }}>
                  Фронтенд разработчик
                </Text>
              </Flex>
              <Text
                textAlign={{ sm: 'justify', md: 'start' }}
                maxW={{ sm: '400px', md: '600px' }}
                mb={{ sm: '6', md: '24' }}
                fontSize={{ sm: '1.15rem', md: '2xl' }}
              >
                Я начинающий разработчик. На данный момент работаю фрилансером.
              </Text>
              <Link
                href="#contacts"
                _hover={{
                  textDecoration: 'none',
                }}
              >
                <Button
                  w={'218px'}
                  h={'69px'}
                  mb={{ sm: '12', md: '28' }}
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
                  Связаться
                </Button>
              </Link>
              <Link
                href="#about"
                _hover={{
                  textDecoration: 'none',
                }}
              >
                <Flex
                  display={{ sm: 'none', md: 'flex' }}
                  maxW={'234px'}
                  alignItems={'center'}
                  justifyContent={'space-between'}
                  m={{ sm: '0 auto', md: '0' }}
                  fontSize={'2xl'}
                >
                  <svg
                    width="30"
                    height="59"
                    viewBox="0 0 30 59"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_2_54)">
                      <path
                        d="M19.6667 7H10.3333C5.17868 7 1 11.4772 1 17V42C1 47.5228 5.17868 52 10.3333 52H19.6667C24.8213 52 29 47.5228 29 42V17C29 11.4772 24.8213 7 19.6667 7Z"
                        stroke={color}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15 18V27.8333"
                        stroke={color}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2_54">
                        <rect width="29.5" height="59" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <Text>Скролить вниз</Text>
                  <Box animation={animation}>
                    <svg
                      width="16"
                      height="18"
                      viewBox="0 0 16 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.2929 17.7071C7.68342 18.0976 8.31658 18.0976 8.70711 17.7071L15.0711 11.3431C15.4616 10.9526 15.4616 10.3195 15.0711 9.92893C14.6805 9.53841 14.0474 9.53841 13.6569 9.92893L8 15.5858L2.34315 9.92893C1.95262 9.53841 1.31946 9.53841 0.928933 9.92893C0.538409 10.3195 0.538409 10.9526 0.928933 11.3431L7.2929 17.7071ZM7 1.10731e-07L7 17L9 17L9 -1.10731e-07L7 1.10731e-07Z"
                        fill={color}
                      />
                    </svg>
                  </Box>
                </Flex>
              </Link>
            </Box>
          </Flex>
          <Box width={{ sm: '280px', md: '391px' }} m={'0 auto'}>
            <Image src={img} w={'100%'} />
          </Box>
        </Flex>
      </Container>
    </Center>
  );
};

export default Home;
