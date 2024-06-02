import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {BrowserRouter} from "react-router-dom"
import {
    QueryClient,
    QueryClientProvider,
    useQuery,
  } from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions :{
    queries :{
      staleTime : 10000
    }
  }
})
ReactDOM.createRoot(document.getElementById("root")).render(
<BrowserRouter>
<QueryClientProvider client={queryClient}>
<App />
</QueryClientProvider>
</BrowserRouter>
);
