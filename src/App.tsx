import "./App.css";
import { Home } from "./pages/Home";
import { AppLayout } from "./shared/services/api/layout/AppLayout";

export function App() {
  return (
    <div>
      <AppLayout>
        <Home />
      </AppLayout>
    </div>
  );
}
