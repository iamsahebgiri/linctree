import { Box, Flex } from '@chakra-ui/react';

const Container = ({ children }) => {
  return (
    <Box bg="gray.50" py={8} px={4} minH="100vh">
      <Flex direction="column" maxW="1280px" margin="0 auto">
        {children}
      </Flex>
    </Box>
  );
};

export default Container;
