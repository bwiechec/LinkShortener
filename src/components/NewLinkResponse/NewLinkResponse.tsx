import { Box } from "@chakra-ui/react";

interface NewLinkResponseProps {
  linkId: string;
}

const NewLinkResponse = ({ linkId }: NewLinkResponseProps) => {
  return (
    <Box p={4} textAlign={"center"}>
      <p>Your new link is:</p>
      <a href={`${import.meta.env.VITE_BASE_API_URL}${linkId}`}>
        {import.meta.env.VITE_BASE_API_URL}
        {linkId}
      </a>
    </Box>
  );
};

export default NewLinkResponse;
