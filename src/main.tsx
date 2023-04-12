import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import AuthProvider from "./contexts/AuthContext";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// styles
import "./index.css";
import SearchContext from "./contexts/SearchContext";
import ToastContext from "./contexts/ToastContext";

const client = new QueryClient({
  defaultOptions: {
    queries: { retry: 0 },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={client}>
        <ReactQueryDevtools />
        <SearchContext>
          <ToastContext>
            <AuthProvider>
              <App />
            </AuthProvider>
          </ToastContext>
        </SearchContext>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
