import { Box, Flex, Spinner } from "@chakra-ui/react";

interface LoadingOverlayProps {
  isLoading: boolean;
}

const LoadingOverlay = ({ isLoading }: LoadingOverlayProps) => {
  if (!isLoading) {
    return null;
  }

  return (
    <Flex
      position="absolute"
      h="full"
      align="center"
      justify="center"
      top={0}
      right={0}
      bottom={0}
      left={0}
      backgroundColor="whiteAlpha.600"
      zIndex={4}
    >
      <Box mt={10}>
        <Spinner position="sticky" top="150px" size="xl"></Spinner>
      </Box>
    </Flex>
  );
};

export default LoadingOverlay;
