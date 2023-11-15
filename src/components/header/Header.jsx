import React from 'react';
import logo from '../../assets/logo-640x300.png';
import { PiMedalBold } from "react-icons/pi";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { MdExpandMore } from "react-icons/md";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
 
  useDisclosure,
 
  Stack,
  Image,
  Icon
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'


const links = [{id:1,title: 'Premium',icon:PiMedalBold},{id:2,title: 'Stake R$ 100',icon:RiMoneyDollarCircleLine}];

const NavLink = ({icon,children}) => {
  
  return (
    <Box display='flex' alignItems={'center'} justifyContent={'center'} as="a" p={2}  _hover={{textDecoration: 'none', borderWidth:2, borderRadius:5}}href={'#'}>
      <Icon as={icon} w={5} h={5} color='#ffffff' marginRight={1}/>
      <Text color={'#ffffff'} as='b'>{children}</Text>
    </Box>
  )
}

// const NavLink2 = ({icon,children}) => {
  
//   return (
//     <Button leftIcon={icon}>
//       {children}
//     </Button>


//   )
// }



const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Box bg='blue.600' px={[1,6]}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            bg={'blue.600'}
            size={'md'}
            icon={isOpen ? <CloseIcon color='#ffffff'/> : <HamburgerIcon color='#ffffff'/>}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack  spacing={8} alignItems={'center'}>
            <Box>
               <Image w='150px' src={logo} alt="logo stakehouse" />
            </Box>
           
          </HStack>
          <Flex alignItems={'center'}>
          <HStack  as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }} marginRight={50}>
              {links.map((link) => (<NavLink icon={link.icon} key={link.id}>{link.title}</NavLink>))}
              <Menu>
                  <MenuButton 
                    bg={'blue.600'}
                    as={Button}
                    leftIcon={<MdExpandMore color='#ffffff' />}  
                    _hover={{ bg: 'blue.600',borderWidth:2 }} 
                    _expanded={{ bg: 'blue.600',borderWidth:2 }}
                    >
                    <Text color={'#ffffff'} as='b'>Mais</Text>
                </MenuButton>
                <MenuList>
                  <MenuItem>Menu Option</MenuItem>
                  <MenuItem>Menu Option</MenuItem>
                  <MenuItem>Menu Option</MenuItem>
                  <MenuItem>Menu Option</MenuItem>
                  <MenuItem>Menu Option</MenuItem>
                  <MenuItem>Menu Option</MenuItem>
                  
                </MenuList>
              </Menu>
            </HStack>
              <Avatar size={'sm'} src={'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'}/>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {links.map((link) => (
                <NavLink  icon={link.icon} key={link.id}>{link.title}</NavLink>
              ))}
              <Menu>
                  <MenuButton 
                    bg={'blue.600'}
                    as={Button}
                    leftIcon={<MdExpandMore color='#ffffff' />}  
                    _hover={{ bg: 'blue.600',borderWidth:2 }} 
                    _expanded={{ bg: 'blue.600',borderWidth:2 }}
                    >
                    <Text color={'#ffffff'} as='b'>Mais</Text>
                </MenuButton>
                <MenuList>
                  <MenuItem>Menu Option</MenuItem>
                  <MenuItem>Menu Option</MenuItem>
                  <MenuItem>Menu Option</MenuItem>
                  <MenuItem>Menu Option</MenuItem>
                  <MenuItem>Menu Option</MenuItem>
                  <MenuItem>Menu Option</MenuItem>
                  
                </MenuList>
              </Menu>
            </Stack>
          </Box>
        ) : null}
      </Box>

    </>
  )

}

export default Header
