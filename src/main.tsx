import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./contexts/AuthContext";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ToastContext from "./contexts/ToastContext";
import "./index.css";

const client = new QueryClient({
  defaultOptions: {
    queries: { retry: 0, refetchOnWindowFocus: false },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={client}>
        <ReactQueryDevtools />
        <ToastContext>
          <AuthProvider>
            <App />
          </AuthProvider>
        </ToastContext>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
