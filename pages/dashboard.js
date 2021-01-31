import { useState } from 'react';
import { Button, Flex, Box, Icon } from '@chakra-ui/react';
import { HiOutlinePlus } from 'react-icons/hi';
import DashboardShell from '@/components/DashboardShell';
import DraggableLinks from '@/components/DraggableLinks';

const DataFromBackend = [
  { id: 'u3nir51t8hk', name: 'Google' },
  { id: 'cvmyi5bkfj5', name: 'Github' }
];

const Dashboard = () => {
  const [state, setState] = useState(DataFromBackend);

  return (
    <DashboardShell>
      <Flex width={['100%']} margin="0 auto" direction="column">
        <Flex p={3} direction="row-reverse">
          <Button
            leftIcon={<Icon as={HiOutlinePlus} />}
            colorScheme="whatsapp"
            ml={4}
            mb={[2, 6]}
            onClick={() => {
              setState((state) => [
                ...state,
                {
                  id: Math.random().toString(36).slice(2),
                  name: 'Saheb Giri'
                }
              ]);
            }}
          >
            Add New Link
          </Button>
          <Button variant="outline" mb={[2, 6]} onClick={() => {}}>
            Save
          </Button>
        </Flex>
        <Box>
          <DraggableLinks state={state} setState={setState} />
        </Box>
      </Flex>
    </DashboardShell>
  );
};

export default Dashboard;
