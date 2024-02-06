import { addLink } from "../../api/link/link";
import { Box, Button, Flex, Input } from "@chakra-ui/react";
import { useRef } from "react";
import { useMutation } from "react-query";
import { useUser } from "../../context/useUser";
import LoadingOverlay from "../LoadingOverlay/LoadingOverlay";

const NewLink = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const mutation = useMutation(addLink);
  const { user } = useUser();

  const handleAddNewUrl = () => {
    const url = inputRef.current?.value;
    if (!url) {
      alert("Please enter a valid url");
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
      <Flex p={4} gap={4} justify={"center"} mt={4} position="relative">
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
      <Box p={4} textAlign={"center"}>
        {mutation.data && (
          <a
            href={`${import.meta.env.VITE_BASE_API_URL}${
              mutation.data.data.id
            }`}
          >
            {import.meta.env.VITE_BASE_API_URL}
            {mutation.data.data.id}
          </a>
        )}
      </Box>
    </Box>
  );
};

export default NewLink;
