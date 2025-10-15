import "./App.css";
import { AppRoutes } from "./Routes";
import { AuthProvider } from "./shared/services/api/contexts/AuthContext";

export function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}
