import axios from "axios";
import { useQuery, useMutation } from "react-query";
import { Shortener } from "../../types/link";

const getLink = (urlId?: string) => {
  return useQuery({
    queryKey: urlId,
    queryFn: () =>
      axios.get<Shortener[]>(
        `${import.meta.env.VITE_BASE_API_URL}api/shorteners${
          urlId ? `/${urlId}` : ""
        }`
      ),
  });
};

const addLink = async (newUrlData: Shortener) => {
  const res = await axios.post(
    `${import.meta.env.VITE_BASE_API_URL}api/shorteners`,
    newUrlData
  );
  return res;
};

const deleteLink = (urlId: string) => {
  return useMutation({
    mutationFn: () =>
      axios.delete(
        `${import.meta.env.VITE_BASE_API_URL}api/shorteners/${urlId}`
      ),
  });
};

const updateLink = (urlId: string, newUrlData: Shortener) => {
  return useMutation({
    mutationFn: () =>
      axios.patch(
        `${import.meta.env.VITE_BASE_API_URL}api/shorteners/${urlId}`,
        JSON.stringify(newUrlData)
      ),
  });
};

export { getLink, addLink, deleteLink, updateLink };
