import { Box, Flex, Text } from "@chakra-ui/react";

function Footer() {
  return (
    <Box bg="gray.200" py={4} position="fixed" bottom={0} left={0} width="100%">
      <Flex justify="right" pr={8}>
        <Text>Creator: Bartosz Wiecheć</Text>
      </Flex>
    </Box>
  );
}

export default Footer;
