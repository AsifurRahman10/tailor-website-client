import { createRoot } from "react-dom/client";
import "./index.css";
import Router from "./Router/Router.jsx";
import { BrowserRouter } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </QueryClientProvider>
  </Provider>
);
