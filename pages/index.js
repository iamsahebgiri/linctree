import Link from 'next/link';
import Head from 'next/head';
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
import Container from '@/components/Container';
import PhoneMockup from '@/components/PhoneMockup';

const Home = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Linctree | The Only Link You’ll Ever Need. </title>
      </Head>
      <Container>
        <Flex alignItems="center" justifyContent="space-between">
          <LincTreeIcon />
          <Stack direction="row" spacing={4}>
            <ChakraLink as={Link} href="/login">
              Sign in
            </ChakraLink>
          </Stack>
        </Flex>
        <Flex direction="column" alignItems="center" mt={16} py={16}>
          <Heading
            color="gray.800"
            textAlign="center"
            width={['250px', 'auto']}
          >
            The Only Link You’ll Ever Need
          </Heading>
          <Text
            mt={3}
            color="gray.600"
            textAlign="center"
            width={['300px', 'auto']}
          >
            Connect audiences to all of your content with just one link
          </Text>
          <Button
            colorScheme="whatsapp"
            my={6}
            onClick={() => {
              router.push('/login');
            }}
          >
            Get started for Free
          </Button>
        </Flex>
        <Flex alignItems="center" justifyContent="center">
          <PhoneMockup />
        </Flex>
      </Container>
    </>
  );
};

export default Home;
