import { Box, Heading, Text } from "@chakra-ui/react";

const NotFound = () => {
  return (
    <Box textAlign="center" mt={20}>
      <Heading as="h1" size="2xl" mb={4}>
        404 Error
      </Heading>
      <Text fontSize="xl" mb={4}>
        Oops! Page not found.
      </Text>
      <Text fontSize="lg">
        The page you are looking for does not exist or has been moved.
      </Text>
    </Box>
  );
};

export default NotFound;
