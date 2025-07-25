import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorMode,
  useColorModeValue,
  Stack,
  Button,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import ResumeContext from '../../Context/ResumeContext';
import logo from './../../Assets/logo.png';

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navigate = useNavigate();
  const { setShowComponent, setSelectBtn, setCurrentTheme } = useContext(ResumeContext);

  const handleHomeClick = () => {
    // Reset context to initial state
    setShowComponent(false);
    setSelectBtn(true);
    setCurrentTheme("Theme1"); // Optional: default theme
    navigate('/');
  };

  return (
    <>
      <Box id="navbar" bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Button variant="unstyled">
            <Box>
              <img style={{ height: '44px' }} className="logo" src={logo} alt="logo" />
            </Box>
          </Button>

          <HStack spacing={8} alignItems={'center'}>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              <Button
                variant="ghost"
                px={2}
                py={1}
                rounded={'md'}
                _hover={{ bg: 'gray.200' }}
                onClick={handleHomeClick}
              >
                Home
              </Button>
            </HStack>
            <Button onClick={toggleColorMode}>
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
          </HStack>

          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              <Button
                w="full"
                variant="ghost"
                px={2}
                py={1}
                rounded={'md'}
                _hover={{ bg: 'gray.200' }}
                onClick={handleHomeClick}
              >
                Home
              </Button>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
