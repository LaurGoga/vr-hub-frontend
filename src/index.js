import ReactDOM from "react-dom/client";
import "./index.css";
import "./assets/css/global.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/main.route";
import AuthProvider from "./context/authProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
