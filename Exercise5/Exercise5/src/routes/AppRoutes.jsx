import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import BitcoinRatesPage from "../pages/BitcoinRatesPage";
import ProtectedRoute from "./ProtectedRoute";

export default function AppRoutes(props) {
  return (
    <Routes>
      <Route index element={<HomePage {...props} />} />
      <Route path="login" element={<LoginPage />} />
      <Route
        path="bitcoin"
        element={
          <ProtectedRoute>
            <BitcoinRatesPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
