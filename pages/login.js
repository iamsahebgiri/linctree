import Container from '@/components/Container';
import LincTreeIcon from '@/components/LincTree';
import {
  Box,
  Flex,
  Heading,
  Stack,
  Button,
  Icon,
  Text
} from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc';
import { SiGithub, SiFacebook } from 'react-icons/si';

import { useAuth } from '@/lib/auth';

const Login = () => {
  const auth = useAuth();
  return (
    <Container>
      <Flex direction="column" alignItems="center">
        <LincTreeIcon h={50} my={6} />
        <Box bg="white" width={['100%', 'sm']} shadow="sm" rounded="md" p={6}>
          <Heading as="h4" size="md" my={6} mb={8} textAlign="center">
            Sign in to Linctree
          </Heading>
          <Stack spacing={4}>
            <Button
              isLoading={auth.loading.google}
              onClick={() => auth.signinWithGoogle('/dashboard')}
              backgroundColor="white"
              color="gray.900"
              variant="outline"
              fontWeight="medium"
              leftIcon={<Icon as={FcGoogle} />}
              _hover={{ bg: 'gray.100' }}
              _active={{
                bg: 'gray.100',
                transform: 'scale(0.95)'
              }}
            >
              Continue with Google
            </Button>
            <Button
              isLoading={auth.loading.facebook}
              onClick={() => auth.signinWithFacebook('/dashboard')}
              colorScheme="messenger"
              leftIcon={<Icon as={SiFacebook} />}
            >
              Continue with Facebook
            </Button>
            <Button
              isLoading={auth.loading.github}
              onClick={() => auth.signinWithGitHub('/dashboard')}
              backgroundColor="gray.900"
              color="white"
              fontWeight="medium"
              leftIcon={<Icon as={SiGithub} />}
              _hover={{ bg: 'gray.700' }}
              _active={{
                bg: 'gray.800',
                transform: 'scale(0.95)'
              }}
            >
              Continue with GitHub
            </Button>
          </Stack>
          <Text
            fontSize="sm"
            mt={6}
            color="gray.500"
            textAlign={['center', 'left']}
          >
            By signing in, you accept our Terms of Service and Privacy Policy.
          </Text>
        </Box>
      </Flex>
    </Container>
  );
};

export default Login;
