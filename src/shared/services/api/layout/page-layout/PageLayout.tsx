import type React from "react";
import "../../../../../App.css";

interface IPageLayoutProps {
  title: string;
  children: React.ReactNode;
}

export const PageLayout = ({ children, title }: IPageLayoutProps) => {
  return (
    <div className="flex justify-center mt-4">
      <div className="w-full max-w-lg bg-white p-4 rounded-md shadow-[0_2px_6px_#0000001a]">
        <div>
          <h1 className="text-2xl font-bold mt-0">{title}</h1>
        </div>

        <div>{children}</div>
      </div>
    </div>
  );
};
