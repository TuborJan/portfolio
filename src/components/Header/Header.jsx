import {
  Container,
  Flex,
  SimpleGrid,
  Link,
  Text,
  Drawer,
  DrawerContent,
  DrawerBody,
  IconButton,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { useRef } from 'react';
import { ColorModeSwitcher } from '../../chakra/ColorModeSwitcher';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';

const Header = ({ sticky }) => {
  const color = useColorModeValue('#595959', '#e7eaef');
  const bg = useColorModeValue('background.100', 'background.300');
  const hoverColor = useColorModeValue('text.200', 'text.400');
  const hamburgerBgHover = useColorModeValue(
    'background.200',
    'background.400'
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnOpen = useRef();

  return (
    <Flex
      alignItems={'center'}
      as={'header'}
      position={{ sm: 'fixed', md: sticky ? 'fixed' : 'relative' }}
      top={{ sm: 'auto', md: '0' }}
      bottom={{ sm: '0', md: 'auto' }}
      zIndex={'10'}
      w={'100%'}
      h={sticky ? '7vh' : '10vh'}
      color={color}
      letterSpacing={'1px'}
      bg={bg}
      boxShadow={sticky ? '2xl' : 'none'}
    >
      <Container maxW={'1300px'} px={'10px'}>
        <Flex
          justifyContent={'space-between'}
          alignItems={'center'}
          py={sticky ? '0' : '8'}
        >
          <ColorModeSwitcher justifySelf={'flex-end'} />
          <Flex
            display={['none', 'none', 'flex', 'flex']}
            w={'600px'}
            fontSize={'24px'}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <Link
              onClick={() => window.scrollTo(0, 0)}
              _hover={{
                color: `${hoverColor}`,
                textDecoration: 'underline',
              }}
            >
              Начало
            </Link>
            <Link
              href="#skills"
              _hover={{
                color: `${hoverColor}`,
                textDecoration: 'underline',
              }}
            >
              Навыки
            </Link>
            <Link
              href="#works"
              _hover={{
                color: `${hoverColor}`,
                textDecoration: 'underline',
              }}
            >
              Работы
            </Link>
            <Link
              href="#contact"
              _hover={{
                color: `${hoverColor}`,
                textDecoration: 'underline',
              }}
            >
              Контакты
            </Link>
          </Flex>
          <IconButton
            ref={btnOpen}
            onClick={onOpen}
            size={'md'}
            fontSize={'3xl'}
            mr={2}
            icon={<HamburgerIcon />}
            background={bg}
            _hover={{
              background: `${hamburgerBgHover}`,
            }}
            _active={{
              background: `${hamburgerBgHover}`,
            }}
            display={['flex', 'flex', 'none', 'none']}
          />
          <Drawer
            isOpen={isOpen}
            placement="bottom"
            onClose={onClose}
            finalFocusRef={btnOpen}
          >
            <DrawerContent
              h={'230px'}
              background={bg}
              borderTopRadius={'15px'}
              boxShadow={'dark-lg'}
            >
              <DrawerBody px={'2'} py={'4'}>
                <SimpleGrid columns={2} spacingY={'7'} mt={'4'}>
                  <Flex justifyContent={'center'}>
                    <Link href={'#home'} onClick={onClose}>
                      <Flex maxW={'24px'} m={'0 auto'}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill={color}
                            d="M21.66,10.25l-9-8a1,1,0,0,0-1.32,0l-9,8a1,1,0,0,0-.27,1.11A1,1,0,0,0,3,12H4v9a1,1,0,0,0,1,1H19a1,1,0,0,0,1-1V12h1a1,1,0,0,0,.93-.64A1,1,0,0,0,21.66,10.25ZM13,20H11V17a1,1,0,0,1,2,0Zm5,0H15V17a3,3,0,0,0-6,0v3H6V12H18ZM5.63,10,12,4.34,18.37,10Z"
                          />
                        </svg>
                      </Flex>
                      <Text>Начало</Text>
                    </Link>
                  </Flex>
                  <Flex justifyContent={'center'}>
                    <Link href={'#skills'} onClick={onClose}>
                      <Flex maxW={'24px'} m={'0 auto'}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill={color}
                            d="M15,16H9a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM9,10h1a1,1,0,0,0,0-2H9a1,1,0,0,0,0,2Zm6,2H9a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Zm4.71,3.29a1,1,0,0,0-.33-.21.92.92,0,0,0-.76,0,1,1,0,0,0-.33.21,1.15,1.15,0,0,0-.21.33,1,1,0,0,0,.21,1.09A1,1,0,0,0,19,17a1,1,0,0,0,.38-.08,1.15,1.15,0,0,0,.33-.21,1,1,0,0,0,.21-1.09A1.15,1.15,0,0,0,19.71,15.29ZM20,8.94a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19.32.32,0,0,0-.09,0A.88.88,0,0,0,13.05,2H7A3,3,0,0,0,4,5V19a3,3,0,0,0,3,3h8a1,1,0,0,0,0-2H7a1,1,0,0,1-1-1V5A1,1,0,0,1,7,4h5V7a3,3,0,0,0,3,3h3v2a1,1,0,0,0,2,0V9S20,9,20,8.94ZM15,8a1,1,0,0,1-1-1V5.41L16.59,8Zm4,10a1,1,0,0,0-1,1v2a1,1,0,0,0,2,0V19A1,1,0,0,0,19,18Z"
                          />
                        </svg>
                      </Flex>
                      <Text>Навыки</Text>
                    </Link>
                  </Flex>
                  <Flex justifyContent={'center'}>
                    <Link href={'#works'} onClick={onClose}>
                      <Flex maxW={'24px'} m={'0 auto'}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill={color}
                            d="M19,2H5A3,3,0,0,0,2,5V19a3,3,0,0,0,3,3H19a2.81,2.81,0,0,0,.49-.05l.3-.07.07,0h0l.05,0,.37-.14.13-.07c.1-.06.21-.11.31-.18a3.79,3.79,0,0,0,.38-.32l.07-.09a2.69,2.69,0,0,0,.27-.32l.09-.13a2.31,2.31,0,0,0,.18-.35,1,1,0,0,0,.07-.15c.05-.12.08-.25.12-.38l0-.15A2.6,2.6,0,0,0,22,19V5A3,3,0,0,0,19,2ZM5,20a1,1,0,0,1-1-1V14.69l3.29-3.3h0a1,1,0,0,1,1.42,0L17.31,20Zm15-1a1,1,0,0,1-.07.36,1,1,0,0,1-.08.14.94.94,0,0,1-.09.12l-5.35-5.35.88-.88a1,1,0,0,1,1.42,0h0L20,16.69Zm0-5.14L18.12,12a3.08,3.08,0,0,0-4.24,0l-.88.88L10.12,10a3.08,3.08,0,0,0-4.24,0L4,11.86V5A1,1,0,0,1,5,4H19a1,1,0,0,1,1,1Z"
                          />
                        </svg>
                      </Flex>
                      <Text>Работы</Text>
                    </Link>
                  </Flex>
                  <Flex justifyContent={'center'}>
                    <Link href={'#contacts'} onClick={onClose}>
                      <Flex maxW={'24px'} m={'0 auto'}>
                        <svg
                          id="Layer_1"
                          data-name="Layer 1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <title>telegram</title>
                          <path
                            fill={color}
                            d="M22.26465,2.42773a2.04837,2.04837,0,0,0-2.07813-.32421L2.26562,9.33887a2.043,2.043,0,0,0,.1045,3.81836l3.625,1.26074,2.0205,6.68164A.998.998,0,0,0,8.134,21.352c.00775.012.01868.02093.02692.03259a.98844.98844,0,0,0,.21143.21576c.02307.01758.04516.03406.06982.04968a.98592.98592,0,0,0,.31073.13611l.01184.001.00671.00287a1.02183,1.02183,0,0,0,.20215.02051c.00653,0,.01233-.00312.0188-.00324a.99255.99255,0,0,0,.30109-.05231c.02258-.00769.04193-.02056.06384-.02984a.9931.9931,0,0,0,.20429-.11456,250.75993,250.75993,0,0,1,.15222-.12818L12.416,18.499l4.03027,3.12207a2.02322,2.02322,0,0,0,1.24121.42676A2.05413,2.05413,0,0,0,19.69531,20.415L22.958,4.39844A2.02966,2.02966,0,0,0,22.26465,2.42773ZM9.37012,14.73633a.99357.99357,0,0,0-.27246.50586l-.30951,1.504-.78406-2.59307,4.06525-2.11695ZM17.67188,20.04l-4.7627-3.68945a1.00134,1.00134,0,0,0-1.35352.11914l-.86541.9552.30584-1.48645,7.083-7.083a.99975.99975,0,0,0-1.16894-1.59375L6.74487,12.55432,3.02051,11.19141,20.999,3.999Z"
                          />
                        </svg>
                      </Flex>
                      <Text>Контакты</Text>
                    </Link>
                  </Flex>
                </SimpleGrid>
                <Flex justifyContent={'space-between'} mt={'4'}>
                  <ColorModeSwitcher justifySelf={'flex-end'} />
                  <IconButton
                    ref={btnOpen}
                    onClick={onClose}
                    size={'md'}
                    fontSize={'2xl'}
                    mr={2}
                    icon={<CloseIcon />}
                    background={bg}
                    _hover={{
                      background: `${hamburgerBgHover}`,
                    }}
                    _active={{
                      background: `${hamburgerBgHover}`,
                    }}
                  />
                </Flex>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Flex>
      </Container>
    </Flex>
  );
};

export default Header;
