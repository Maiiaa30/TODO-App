interface ITodoItemProps {
  id: string;
  label: string;
  complete: boolean;
  OnRemove(): void;
  OnComplete(): void;
}

export const TodoItem = ({
  id,
  label,
  complete,
  OnRemove,
  OnComplete,
}: ITodoItemProps) => {
  return (
    <li className="pt-2 list-disc ml-5" key={id}>
      {label}
      {complete ? " | Concluido" : ""}

      <button
        className="ml-2 p-1.5 text-center bg-green-600 rounded-md cursor-pointer hover:bg-green-700"
        onClick={OnComplete}
      >
        Concluir
      </button>
      <button
        className="ml-2 p-1.5 text-center bg-red-600 rounded-md hover:bg-red-700 text-white"
        onClick={OnRemove}
      >
        Remover
      </button>
    </li>
  );
};
