import { useState } from "react";

interface IInputAddProps {
  onAdd(value: string): void;
}

export const InputAdd = (props: IInputAddProps) => {
  const [value, setValue] = useState("");

  const handleAdd = () => {
    props.onAdd(value);
    setValue("");
  };

  return (
    <div className="flex items-center justify-between mb-2">
      <input
        className="flex-1 mr-4 border-b-1"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <button
        onClick={handleAdd}
        className="bg-slate-800 border-1 border-black ml-6 px-4 py-1 rounded-md hover:bg-[#38bdf8] hover:text-[#0f172a] delay-150 duration-300 ease-in-out transition cursor-pointer"
      >
        Adicionar
      </button>
    </div>
  );
};
