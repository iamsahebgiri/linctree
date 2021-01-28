import Link from 'next/link';
import { useRouter } from 'next/router';

import {
  Button,
  Heading,
  Text,
  Box,
  Flex,
  Link as ChakraLink,
  Stack
} from '@chakra-ui/react';
import LincTreeIcon from '@/components/LincTree';

const Home = () => {
  const router = useRouter();
  return (
    <Box bg="gray.100" py={8} px={4} minH="100vh">
      <Flex direction="column" maxW="1280px" margin="0 auto">
        <Flex alignItems="center" justifyContent="space-between">
          <LincTreeIcon />
          <Stack direction="row" spacing={4}>
            <ChakraLink as={Link} href="/login">
              Log in
            </ChakraLink>
            <ChakraLink as={Link} href="/register">
              Register
            </ChakraLink>
          </Stack>
        </Flex>
        <Flex direction="column" alignItems="center" mt={16} py={16}>
          <Heading color="gray.800" textAlign="center">The Only Link You’ll Ever Need</Heading>
          <Text mt={3} color="gray.600"  textAlign="center">
            Connect audiences to all of your content with just one link
          </Text>
          <Button
            colorScheme="whatsapp"
            mt={6}
            onClick={() => {
              router.push('/register');
            }}
          >
            Get started for Free
          </Button>
        </Flex>
        <Flex alignItems="center" justifyContent="center">
          {/* // iPhone */}
          <Flex
            width="320px"
            height="700px"
            border="10px solid"
            borderRadius="40px"
            justifyContent="center"
          >
            {/* notch */}
            <Box
              position="absolute"
              bg="black"
              width="200px"
              height="30px"
              borderRadius="0px 0px 20px 20px"
            />
            <Box
              height="100%"
              width="100%"
              borderRadius="30px"
              backgroundSize="cover"
              bg="url('https://cdn57.androidauthority.net/wp-content/uploads/2020/10/iPhone-12-Orb-Blue-Light.jpg')"
            />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Home;
