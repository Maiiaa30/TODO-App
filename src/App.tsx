import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import "./App.css";
import { Home } from "./pages/Home";
import { AppLayout } from "./shared/services/api/layout/AppLayout";
import { About } from "./pages/About";
import { Detail } from "./pages/Detail";
import { Login } from "./pages/public/Login";

export function App() {
  const isAuthenticated = true;
  return (
    <BrowserRouter>
      {isAuthenticated && (
        <AppLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/detalhe/:id" element={<Detail />} />
            {/* Pagina nao encontrada da redirect para pagina incial */}
            <Route path="*" element={<Navigate to="/" />} />{" "}
          </Routes>
        </AppLayout>
      )}
      {!isAuthenticated && (
        <Routes>
          <Route path="*" element={<Login />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}
