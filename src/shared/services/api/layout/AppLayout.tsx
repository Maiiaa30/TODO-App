import type React from "react";
import "../../../../App.css";

export const AppLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="h-full flex flex-col bg-gray-800 shadow-[0_2px_6px_#0000001a] min-h-screen">
      <div className="flex items-center justify-center gap-4 p-5 placeholder-white bg-gray-700">
        <a className="bg-blue-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 p-2.5 rounded-md text-white">
          Pagina Inicial
        </a>
        <a className="bg-blue-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 p-2.5 rounded-md text-white pointer-events-auto">
          Users
        </a>
      </div>

      <hr className="border-white" />

      {children}
    </div>
  );
};
