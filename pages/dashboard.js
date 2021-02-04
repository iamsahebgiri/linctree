import { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Image,
  Skeleton,
  Stack,
  useToast
} from '@chakra-ui/react';
import { HiOutlinePlus } from 'react-icons/hi';
import DashboardShell from '@/components/DashboardShell';
import DraggableLinks from '@/components/DraggableLinks';
import DashboardSkeleton from '@/components/Skeleton/DashboardSkeleton';
import { useAuth } from '@/lib/auth';
import { getLinks, updateLinks } from '@/lib/db';

const Dashboard = () => {
  const [state, setState] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const auth = useAuth();
  const toast = useToast();

  useEffect(() => {
    // console.log(auth?.user?.uid)
    if (auth?.user?.uid) {
      getLinks(auth?.user?.uid).then((doc) => {
        const { links } = doc.data();
        console.log(links);
        setState(links);
      });
    }
  }, [auth]);

  return (
    <DashboardShell>
      <Flex width={['100%']} margin="0 auto" direction="column">
        {!auth?.user ? (
          <DashboardSkeleton />
        ) : (
          <Flex p={3} direction="row-reverse">
            <Button
              leftIcon={<Icon as={HiOutlinePlus} />}
              colorScheme="whatsapp"
              ml={4}
              mb={[2, 6]}
              onClick={() => {
                setState((state) => [
                  {
                    id: Math.random().toString(36).slice(2),
                    provider: 'Example',
                    href: 'https://example.com/'
                  },
                  ...state
                ]);
              }}
            >
              Add New Link
            </Button>
            {state.length !== 0 && (
              <Button
                variant="outline"
                mb={[2, 6]}
                isLoading={submitting}
                onClick={() => {
                  setSubmitting(true);
                  updateLinks(auth.user.uid, state)
                    .then(() => {
                      console.log('Success');
                      toast({
                        title: 'Sucess.',
                        description: 'Your links saved successfully.',
                        status: 'success',
                        duration: 9000,
                        isClosable: true
                      });
                      setSubmitting(false);
                    })
                    .catch((err) => {
                      console.log('Something went wrong!');
                    });
                }}
              >
                Save
              </Button>
            )}
          </Flex>
        )}

        {state.length == 0 && <Stack spacing={8} my={12}>
          <Image src="/assets/undraw_city_life.svg" />
          <Heading size="md" px={[12]} textAlign="center">
            Seems like you have not created any links yet.
          </Heading>
        </Stack>}
        <Box>
          <DraggableLinks state={state} setState={setState} />
        </Box>
      </Flex>
    </DashboardShell>
  );
};

export default Dashboard;
