import React from "react";
import ReactDOM from "react-dom/client";
import router from "./Router";
import "./index.css";
import { RouterProvider } from "react-router-dom";
// import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GoogleOAuthProvider
      clientId={process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID}
      onScriptLoadError={() => console.log("실패")}
      onScriptLoadSuccess={() => console.log("성공")}
    >
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
