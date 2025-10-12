import { Link } from "react-router";

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
    <li
      className="group flex items-center justify-between p-3 bg-slate-700 rounded-lg border border-slate-600 transition-all duration-200 hover:border-slate-500 mb-3"
      key={id}
      data-complete={complete}
    >
      <Link
        to={`/detalhe/${id}`}
        className={`flex-1 flex items-center text-slate-200 transition-all cursor-pointer ${
          complete ? "line-through text-slate-500" : "group-hover:text-cyan-300"
        }`}
      >
        <svg
          className={`w-4 h-4 mr-3 transition-colors ${
            complete
              ? "text-slate-500"
              : "text-cyan-400 group-hover:text-cyan-300"
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
        {label}
      </Link>

      <div className="flex gap-2 ml-4">
        {!complete && (
          <button
            className="p-2 rounded-md bg-slate-600 hover:bg-green-500 text-slate-400 hover:text-white transition-all duration-200 transform hover:scale-110"
            onClick={OnComplete}
            title="Mark as complete"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </button>
        )}
        <button
          className="p-2 rounded-md bg-slate-600 hover:bg-red-500 text-slate-400 hover:text-white transition-all duration-200 transform hover:scale-110"
          onClick={OnRemove}
          title="Remove task"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      </div>
    </li>
  );
};
