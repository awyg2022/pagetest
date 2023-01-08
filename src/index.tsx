import * as React from "react";
import ReactDOM from "react-dom/client";
import { StyledEngineProvider } from "@mui/material/styles";
import ButtonAppbar from "./Appbar";

ReactDOM.createRoot(document.querySelector("#root")).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ButtonAppbar />
    </StyledEngineProvider>
  </React.StrictMode>
);
