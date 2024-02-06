import { QueryClient, QueryClientProvider } from "react-query";
import NewLink from "./components/NewLink/NewLink";
import { Box, Heading } from "@chakra-ui/react";
import { useState } from "react";

export default function Home() {
  const [client] = useState(new QueryClient());
  return (
    <QueryClientProvider client={client}>
      <Box p={4}>
        <Heading as="h2" size={"2xl"} textAlign={"center"}>
          Welcome to LinkShortener!
        </Heading>
        <NewLink />
      </Box>
    </QueryClientProvider>
  );
}
