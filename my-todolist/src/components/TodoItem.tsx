/* components/TodoItem.tsx */
type Props = {
    id: number;
    text: string;
    onDelete: (id: number) => void;
  };
  
  export function TodoItem({ id, text, onDelete }: Props) {
    return (
      <li className="flex justify-between items-center p-3 bg-white rounded-xl shadow mb-2">
        <span>{text}</span>
        <button
          onClick={() => onDelete(id)}
          className="text-red-400 hover:text-red-600 transition"
        >삭제</button>
      </li>
    );
  }
  