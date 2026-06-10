import React from "react";
import ReactDOM from "react-dom/client";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import App from "./App";
import { AuthProvider } from "./hooks/useAuth";
import "./index.css";

const convexUrl = import.meta.env.VITE_CONVEX_URL;
const convex = new ConvexReactClient(convexUrl || "http://127.0.0.1:3210");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConvexProvider client={convex}>
      <AuthProvider>
        <App missingConvexUrl={!convexUrl} />
      </AuthProvider>
    </ConvexProvider>
  </React.StrictMode>
);
