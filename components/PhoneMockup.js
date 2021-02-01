import { Flex, Box } from '@chakra-ui/react';

const PhoneMockup = () => {
  return (
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
        width="180px"
        height="30px"
        borderRadius="0px 0px 20px 20px"
      />
      <Box
        height="100%"
        width="100%"
        borderRadius="30px"
        backgroundSize="cover"
        bg="url('/assets/iPhone-12-Orb-Blue-Light.jpg')"
      >
        <iframe
          src="/default.asp"
          width="100%"
          height="100%"
          style={{borderRadius: "30px"}}
        ></iframe>
      </Box>
    </Flex>
  );
};

export default PhoneMockup;
