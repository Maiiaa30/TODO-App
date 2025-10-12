import type React from "react";
import "../../../../../App.css";

interface IPageLayoutProps {
  title: string;
  children: React.ReactNode;
}

export const PageLayout = ({ children, title }: IPageLayoutProps) => {
  return (
    <div className="w-full min-w-xl max-w-lg bg-slate-800 rounded-xl shadow-2xl overflow-hidden border border-slate-700 p-10">
      <div className="p-6">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-white">{title}</h1>
        </div>
      </div>

      <div className="space-y-4">{children}</div>
    </div>
  );
};
