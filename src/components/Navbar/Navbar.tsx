import { Box, Flex, Spacer, Link, Button } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box bg="gray.200" p={4}>
      <Flex alignItems="center">
        <Link href="/" fontSize="xl" fontWeight="bold">
          LinkShortener
        </Link>
        <Spacer />
        <Link href="/linkHistory" mr={4}>
          Your links
        </Link>
        <Link href="/login" mr={4}>
          <Button colorScheme="teal" variant="outline">
            Sign In
          </Button>
        </Link>
      </Flex>
    </Box>
  );
};

export default Navbar;
