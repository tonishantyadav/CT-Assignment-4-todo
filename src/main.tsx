import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import TaskProvider from "./TaskProvider.tsx";
import "./index.css";
import theme from "./theme.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <TaskProvider>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
      </TaskProvider>
    </ChakraProvider>
  </React.StrictMode>
);
