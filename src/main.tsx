import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar/Navbar.tsx";
import Footer from "./components/Footer/Footer.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound.tsx";
import { UserContextProvider } from "./context/useUser.tsx";
import LinkHistory from "./components/LinkHistory/LinkHistory.tsx";
import { QueryClient, QueryClientProvider } from "react-query";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <QueryClientProvider client={new QueryClient()}>
        <UserContextProvider>
          <>
            <Navbar />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<App />} />
                <Route path="/linkHistory" element={<LinkHistory />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
            <Footer />
          </>
        </UserContextProvider>
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>
);
