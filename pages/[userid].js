import LincTreeIcon from '@/components/LincTree';
import {
  Avatar,
  Box,
  Flex,
  Heading,
  Stack,
  Text,
  Link
} from '@chakra-ui/react';
import { useRouter } from 'next/router';

const links = [
  {
    id: Math.random().toString(36).slice(2),
    name: 'Github',
    href: 'https://github.com/iamsahebgiri'
  },
  {
    id: Math.random().toString(36).slice(2),
    name: 'Linkedin',
    href: 'https://linkedin.com/in/iamsahebgiri'
  },
  {
    id: Math.random().toString(36).slice(2),
    name: 'Instagram',
    href: 'https://instagram.com/iamsahebgiri'
  },
  {
    id: Math.random().toString(36).slice(2),
    name: 'Twitter',
    href: 'https://twitter.com/iamsahebgiri'
  }
];

const UserProfile = () => {
  const router = useRouter();
  const { userid } = router.query;
  return (
    <Flex
      width="100%"
      justifyContent="center"
      bg="url('https://images.unsplash.com/photo-1522441815192-d9f04eb0615c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1482&q=80')"
      // bgSize="cover"
      // bgPos="center"
      // bgPosition="center"
    >
      <Box
        // __css={{
        //   backdropFilter: 'saturate(180%) blur(20px)',
        //   alignItems: 'center'
        // }}
        width={['100%', 'md', 'lg']}
      >
        <Flex p={1} minH="100vh" direction="column" alignItems="center" py={16}>
          <Avatar
            size="xl"
            name="Selena Gomez"
            src="https://d1fdloi71mui9q.cloudfront.net/OpRYQ3AXTQoZYncuWhh6_Qyl0MvMh6e5eIoI0"
          />
          <Heading size="lg" mt={2} color="gray.800">
            Selena Gomez
          </Heading>
          <Text color="gray.600">@selenagomez</Text>
          <Flex direction="column" width={['85%', '70%']} mt={12}>
            {links.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                isExternal
                p="3"
                mb="3"
                rounded="md"
                bg="gray.800"
                color="gray.50"
                shadow="md"
                _hover={{ bg: 'gray.700' }}
                _active={{
                  bg: 'gray.800',
                  transform: 'scale(0.96)',
                  shadow: 'sm'
                }}
              >
                <Flex justifyContent="center">
                  <Text fontWeight="medium" fontSize="sm">
                    {link.name}
                  </Text>
                </Flex>
              </Link>
            ))}
          </Flex>
          <LincTreeIcon mt={16} />
        </Flex>
      </Box>
    </Flex>
  );
};

export default UserProfile;
