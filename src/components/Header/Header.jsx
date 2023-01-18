import {
  Box,
  Container,
  Flex,
  Link,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { ColorModeSwitcher } from '../../chakra/ColorModeSwitcher';
import { HamburgerIcon } from '@chakra-ui/icons';

const Header = () => {
  const color = useColorModeValue('text.100', 'text.300');
  const bg = useColorModeValue('background.100', 'background.300');
  const hoverColor = useColorModeValue('text.200', 'text.400');
  const hamburgerBgHover = useColorModeValue(
    'background.200',
    'background.400'
  );

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
    <Box
      as={'header'}
      id="home"
      position={sticky ? 'sticky' : 'relative'}
      top={'0'}
      zIndex={'10'}
      w={'100%'}
      h={'10vh'}
      color={color}
      letterSpacing={'1px'}
      bg={bg}
      boxShadow={sticky ? '2xl' : 'none'}
    >
      <Container maxW={'1300px'} px={'10px'}>
        <Flex justifyContent={'space-between'} alignItems={'center'} py={'8'}>
          <ColorModeSwitcher justifySelf={'flex-end'} />
          <Flex
            display={['none', 'none', 'flex', 'flex']}
            w={'600px'}
            fontSize={'24px'}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <Link
              href="#home"
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
            aria-label="open menu"
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
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
