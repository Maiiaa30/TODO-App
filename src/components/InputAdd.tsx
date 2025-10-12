import { useRef, useState } from "react";

interface IInputAddProps {
  onAdd(value: string): void;
}

export const InputAdd = (props: IInputAddProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState("");

  const handleAdd = () => {
    props.onAdd(value);
    setValue("");
    inputRef.current?.focus();
  };

  return (
    <div className="flex gap-3 mb-6">
      <input
        className="flex-1 px-4 py-3 bg-slate-700 border-slate-600 rounded-lg text-white placeholder-slate-500 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-200"
        value={value}
        placeholder="Adicionar uma nova tarefa"
        ref={inputRef}
        onChange={(e) => setValue(e.target.value)}
      />

      <button
        onClick={handleAdd}
        className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
      >
        Adicionar
      </button>
    </div>
  );
};
