import type React from "react";
import "../../../../App.css";

export const AppLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="h-full min-h-screen flex flex-col items-center bg-slate-900 shadow-[0_2px_6px_#0000001a]">
      <div className="flex items-center justify-center gap-4 p-5 placeholder-white text-[#38bdf8] font-medium ">
        <a className=" bg-slate-900 hover:text-white delay-150 duration-300 ease-in-out transition px-4 py-2 rounded-md text-[#38bdf8] border-1 border-black cursor-pointer">
          Pagina Inicial
        </a>
        <a className=" bg-slate-900 hover:text-white delay-150 duration-300 ease-in-out transition px-4 py-2 rounded-md text-[#38bdf8] border-1 border-black cursor-pointer">
          Users
        </a>
      </div>

      {/* <hr className="border-white" /> */}

      {children}
    </div>
  );
};
