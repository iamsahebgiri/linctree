import {
  Avatar,
  Box,
  Button,
  Flex,
  Icon,
  Link,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  Portal
} from '@chakra-ui/react';
import { FcSettings, FcStackOfPhotos, FcLink } from 'react-icons/fc';
import { HiOutlineExternalLink } from 'react-icons/hi';

import { LincTreeFavIcon } from '@/components/LincTree';
import NavItem from '@/components/NavItem';
import PhoneMockup from '@/components/PhoneMockup';
import { useAuth } from '@/lib/auth';

const DashboardShell = (props) => {
  const auth = useAuth();

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
      <Flex position="fixed" zIndex={1}>
        <Flex
          width={['100vw', '64px']}
          flexDir={['row', 'column']}
          py="4"
          px={['4', 0]}
          height={['64px', '100vh']}
          bg="gray.800"
          alignItems="center"
          justifyContent="space-between"
        >
          <LincTreeFavIcon h={8} width={8} />
          <Menu>
            <MenuButton>
              <Avatar
                size="sm"
                name={auth?.user?.name}
                src={auth?.user?.photoUrl}
              />
            </MenuButton>
            <Portal>
              <MenuList>
                <MenuGroup title="Account">
                  <MenuItem fontSize="sm">Settings</MenuItem>
                  <MenuItem fontSize="sm" onClick={() => auth.signout()}>
                    Sign Out
                  </MenuItem>
                </MenuGroup>
              </MenuList>
            </Portal>
          </Menu>
        </Flex>
      </Flex>

      <Flex ml={[0, '64px']} mt={['64px', 0]} minH="100vh" bg="gray.100">
        <Box width={['100%', '100%', '58%']}>
          <Flex bg="white" shadow="sm" px={2} pt={2}>
            {navs.map((nav) => (
              <NavItem key={nav.href} nav={nav}>
                {nav.name}
              </NavItem>
            ))}
          </Flex>
          <Box>
            <Flex p={[2, 6]}>{props.children}</Flex>
          </Box>
        </Box>
        <Box
          width={['0', '42%']}
          bg="white"
          display={['none', 'none', 'block']}
        >
          <Flex
            bg="white"
            shadow="sm"
            py={2}
            px={6}
            justifyContent="space-between"
            alignItems="center"
          >
            <Link
              fontSize="sm"
              color="gray.600"
              href="https://chakra-ui.com"
              isExternal
            >
              https://linctree.now.sh/iamsahebgiri
              <Icon as={HiOutlineExternalLink} mx="6px" />
            </Link>
            <Button
              color="gray.900"
              variant="outline"
              fontSize="sm"
              fontWeight="normal"
            >
              Share
            </Button>
          </Flex>
          <Flex justifyContent="center" py={6}>
            <PhoneMockup />
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default DashboardShell;
