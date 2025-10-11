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
    <li className="pt-2 list-disc flex items-center justify-between" key={id}>
      {label}
      {complete ? " | Concluido" : ""}
      <div className="flex gap-2">
        <button
          className="ml-2 px-3 flex gap-2 py-1.5 rounded-md bg-green-600 hover:bg-green-500 text-white text-sm transition"
          onClick={OnComplete}
        >
          Concluir
        </button>
        <button
          className="ml-2 px-3 py-1.5 rounded-md bg-red-600 hover:bg-red-500 text-white text-sm transition"
          onClick={OnRemove}
        >
          Remover
        </button>
      </div>
    </li>
  );
};
