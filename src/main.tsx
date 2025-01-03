import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
// import App from "./App.tsx";
import "./index.css";
import { store } from "./Redux/store.ts";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/route.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store }>
      <RouterProvider router={routes}>

      {/* <App /> */}
      </RouterProvider>
    </Provider>
  </StrictMode>
);
