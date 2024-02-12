import { addLink } from "../../api/link/link";
import { Box, Button, Flex, Input, useToast } from "@chakra-ui/react";
import { useRef } from "react";
import { useMutation } from "react-query";
import { useUser } from "../../context/useUser";
import LoadingOverlay from "../LoadingOverlay/LoadingOverlay";
import NewLinkResponse from "../NewLinkResponse/NewLinkResponse";

const NewLink = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const mutation = useMutation(addLink);
  const { user } = useUser();
  const toast = useToast();

  const handleAddNewUrl = () => {
    const url = inputRef.current?.value;
    if (!url) {
      toast({
        title: "Error",
        description: "Please enter a valid url.",
        status: "error",
        position: "top",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    mutation.mutate({
      name: url,
      url: url,
      timestamp: new Date().getTime().toString(),
      click_count: 0,
      user_id: user?.id ?? "0",
    });
  };

  console.log(mutation.isLoading);
  console.log(user);

  return (
    <Box p={4}>
      <Flex p={4} justify={"center"} mt={4} position="relative">
        <Input
          ref={inputRef}
          p={6}
          w={{ base: "30", sm: "60", md: "96" }}
          placeholder="Enter url to shorten"
        />
        <Button p={6} colorScheme="teal" onClick={handleAddNewUrl}>
          Shorten
        </Button>
        <LoadingOverlay isLoading={mutation.isLoading} />
      </Flex>
      {mutation.data && !mutation.isLoading && (
        <NewLinkResponse linkId={mutation.data.data.id} />
      )}
    </Box>
  );
};

export default NewLink;
