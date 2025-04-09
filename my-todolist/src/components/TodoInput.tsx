/* components/TodoInput.tsx */
import { useState } from "react";

type Props = {
  onAdd: (text: string) => void;
};

export function TodoInput({ onAdd }: Props) {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text.trim());
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4 w-full max-w-md">
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="할 일을 입력하세요"
        className="flex-1 px-4 py-2 rounded-xl shadow border-none focus:outline-none focus:ring-2 focus:ring-[#f5bcb6]"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-[#f5bcb6] text-white rounded-xl hover:scale-105 transition shadow"
      >추가</button>
    </form>
  );
}
