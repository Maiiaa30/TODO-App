import type React from "react";
import "../../../../App.css";
import { NavLink } from "react-router";

export const AppLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-950">
      <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center items-center h-16">
            <nav className="flex gap-6">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                    isActive
                      ? "border-b-2 rounded-none border-l-0 border-r-0 border-cyan-500 text-white shadow-lg"
                      : "bg-slate-700 text-cyan-400 hover:bg-slate-600 hover:text-cyan-300"
                  }`
                }
              >
                Pagina Incial
              </NavLink>
              <NavLink
                to="/sobre"
                className={({ isActive }) =>
                  `px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                    isActive
                      ? "border-b-2 rounded-none border-l-0 border-r-0 border-cyan-500 text-white shadow-lg"
                      : "bg-slate-700 text-cyan-400 hover:bg-slate-600 hover:text-cyan-300"
                  }`
                }
              >
                Sobre
              </NavLink>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center mt-10">
        {children}
      </main>
    </div>
  );
};
