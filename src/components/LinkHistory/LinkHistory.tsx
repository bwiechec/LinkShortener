import { getLink } from "../../api/link/link";
import {
  Box,
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
  Text,
  Td,
  Link,
  Button,
  useToast,
} from "@chakra-ui/react";
import { FaPenToSquare } from "react-icons/fa6";
import { FaRegTrashCan } from "react-icons/fa6";

const LinkHistory = () => {
  const { data, isError, isLoading } = getLink();
  const toast = useToast();

  const showToast = () => {
    toast({
      title: "Not implemented",
      description: "This feature is not implemented yet.",
      status: "warning",
      position: "top",
      duration: 3000,
      isClosable: true,
    });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }
  return (
    <Box p={4} w={"100%"} maxH={"100%"} pb={16} boxSizing="border-box">
      <Text as={"b"} fontSize={"3xl"}>
        Link History
      </Text>
      <TableContainer
        border="1px solid"
        borderColor="gray.200"
        borderRadius="6px"
        my="16px"
      >
        <Table layout="fixed">
          <Thead bg={"gray.200"}>
            <Tr w={"100%"}>
              <Th textAlign="center" colSpan={2}>
                Shorten link
              </Th>
              <Th textAlign="center" colSpan={2}>
                Name
              </Th>
              <Th textAlign="center" colSpan={2}>
                Click count
              </Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.data.map((link) => {
              return (
                <Tr key={link.id}>
                  <Td colSpan={2}>
                    <Text
                      textAlign="center"
                      wordBreak={"break-all"}
                      textOverflow={"ellipsis"}
                      whiteSpace={"nowrap"}
                      overflow={"hidden"}
                    >
                      <Link>
                        {import.meta.env.VITE_BASE_API_URL}
                        {link.id}
                      </Link>
                    </Text>
                  </Td>
                  <Td colSpan={2}>
                    <Text
                      textAlign="center"
                      wordBreak={"break-all"}
                      textOverflow={"ellipsis"}
                      whiteSpace={"nowrap"}
                      overflow={"hidden"}
                    >
                      {link.name}
                    </Text>
                  </Td>
                  <Td colSpan={2}>
                    <Text
                      textAlign="center"
                      wordBreak={"break-all"}
                      textOverflow={"ellipsis"}
                      whiteSpace={"nowrap"}
                      overflow={"hidden"}
                    >
                      {link.click_count}
                    </Text>
                  </Td>
                  <Td>
                    <Button mr={"4"} onClick={showToast}>
                      <FaPenToSquare />
                    </Button>
                    <Button
                      onClick={showToast}
                      bgColor={"red.500"}
                      color={"white"}
                      _hover={{ bgColor: "red.300" }}
                    >
                      <FaRegTrashCan />
                    </Button>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};
export default LinkHistory;
