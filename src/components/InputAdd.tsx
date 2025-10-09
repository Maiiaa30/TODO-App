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
    <div>
      <input
        className="border-b-1"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <button
        onClick={handleAdd}
        className="bg-amber-300 ml-6 p-1.5 rounded-md"
      >
        Adicionar
      </button>
    </div>
  );
};
