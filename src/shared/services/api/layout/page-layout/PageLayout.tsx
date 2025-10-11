import type React from "react";
import "../../../../../App.css";

interface IPageLayoutProps {
  title: string;
  children: React.ReactNode;
}

export const PageLayout = ({ children, title }: IPageLayoutProps) => {
  return (
    <div className="flex justify-center mt-0 text-white p-6 w-full">
      <div className="w-full max-w-lg bg-slate-800 border-1 border-black p-4 rounded-md">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold mt-0 mb-2">{title}</h1>
        </div>

        <div>{children}</div>
      </div>
    </div>
  );
};
