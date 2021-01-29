import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import {
  Avatar,
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList
} from '@chakra-ui/react';
import { FcSettings, FcStackOfPhotos, FcLink } from 'react-icons/fc';
import { LincTreeFavIcon } from '@/components/LincTree';
import { Text } from '@chakra-ui/react';
import NavItem from '@/components/NavItem';

const Dashboard = (props) => {
  const router = useRouter();
  const navs = [
    {
      name: 'Links',
      icon: FcLink,
      href: 'dashboard'
    },
    {
      name: 'Appearance',
      icon: FcStackOfPhotos,
      href: 'appearance'
    },
    {
      name: 'Settings',
      icon: FcSettings,
      href: 'settings'
    }
  ];
  return (
    <Box>
      <Flex position="fixed">
        <Flex
          width="64px"
          flexDir="column"
          py="4"
          height="100vh"
          bg="gray.800"
          alignItems="center"
          justifyContent="space-between"
        >
          <LincTreeFavIcon h={8} width={8} />
          <Menu offset={[40, -30]}>
            <MenuButton>
              <Avatar
                size="sm"
                name="Dan Abrahmov"
                fallbackSrc="https://via.placeholder.com/100/000000/FFFFFF/"
                src={`http://localhost:3030/?.profilePicture}`}
              />
            </MenuButton>
            <MenuList>
              <MenuGroup title="Account">
                <MenuItem
                  fontSize="sm"
                  onClick={() => {
                    router.push('/admin/account');
                  }}
                >
                  Settings
                </MenuItem>
                <MenuItem
                  fontSize="sm"
                  onClick={() => {
                    localStorage.removeItem('token');
                    localStorage.removeItem('user');
                    router.push('/login');
                  }}
                >
                  Sign Out
                </MenuItem>
              </MenuGroup>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>

      <Flex ml="64px" minH="100vh" bg="gray.50">
        <Box width="58%">
          <Flex bg="white" shadow="sm" px={2} pt={2}>
            {navs.map((nav) => (
              <NavItem key={nav.href} nav={nav}>
                {nav.name}
              </NavItem>
            ))}
          </Flex>
        </Box>
        <Box width="42%" bg="teal.300">
          there
        </Box>
      </Flex>
    </Box>
  );
};

export default Dashboard;
