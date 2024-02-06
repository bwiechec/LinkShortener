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

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <UserContextProvider>
        <>
          <Navbar />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
          <Footer />
        </>
      </UserContextProvider>
    </ChakraProvider>
  </React.StrictMode>
);
