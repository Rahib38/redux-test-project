import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
// import App from "./App.tsx";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { ThemeProvider } from "./providers/theme-provider.tsx";
import { store } from "./Redux/store.ts";
import routes from "./routes/route.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <RouterProvider router={routes}></RouterProvider>
      </Provider>
    </ThemeProvider>
  </StrictMode>
);
