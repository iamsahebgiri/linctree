import LincTreeIcon from '@/components/LincTree';
import { Avatar, Box, Flex, Heading, Stack, Text } from '@chakra-ui/react';
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
    <Flex width="100%" margin="0 auto">
      <Flex
        p={3}
        minH="100vh"
        direction="column"
        bg="url('https://source.unsplash.com/random')"
        alignItems="center"
        width={['100%', 'md', 'lg']}
      >
        <Avatar size="xl" name="Saheb Giri" src="" mt={6} />
        <Heading size="lg" mt={2} color="gray.800">
          Saheb Giri
        </Heading>
        <Text color="gray.600">@iamsahebgiri</Text>
        <Flex direction="column" width={'80%'} mt="6">
          {links.map((link) => (
            <Flex
              key={link.id}
              p="3"
              mb="3"
              rounded="md"
              bg="gray.800"
              color="gray.50"
              shadow="md"
              _hover={{ bg: 'gray.700', cursor: 'pointer' }}
              _active={{
                bg: 'gray.800',
                transform: 'scale(0.96)',
                shadow: 'sm'
              }}
              alignItems="center"
              justifyContent="center"
            >
              <Text fontWeight="medium" fontSize="sm">
                {link.name}
              </Text>
            </Flex>
          ))}
        </Flex>
        <LincTreeIcon mt={8} />
      </Flex>
    </Flex>
  );
};

export default UserProfile;
