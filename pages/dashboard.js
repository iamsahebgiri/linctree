import { Button, Flex, Box, Stack } from '@chakra-ui/react';
import DashboardShell from '@/components/DashboardShell';
import DraggableLinks from '@/components/DraggableLinks';

const DataFromBackend = [
  { id: 'gzm10coxqss', name: 'Facebook' },
  { id: 'u3nir51t8hk', name: 'Google' },
  { id: 'cvmyi5bkfj5', name: 'Github' },
  { id: '9ailtmuoa58', name: 'Reddit' },
  { id: 'if8r6fvt9j', name: 'Youtube' },
  { id: 'k5tjew3uf5n', name: 'Linkedin' }
];

const Dashboard = () => {
  return (
    <DashboardShell>
      <Flex p={[2, 6]}>
        <Flex width={['100%', 'md']} margin="0 auto" direction="column">
          <Button isFullWidth colorScheme="whatsapp" mb={[2, 6]}>
            Add New Link
          </Button>
          <Box>
            <DraggableLinks data={DataFromBackend} />
          </Box>
        </Flex>
      </Flex>
    </DashboardShell>
  );
};

export default Dashboard;
