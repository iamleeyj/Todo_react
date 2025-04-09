import React, { useState } from "react";

// 할 일 항목 타입 정의
type Task = {
  id: number;
  text: string;
  completed: boolean;
};

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  // 새로운 할 일 추가
  const handleAddTask = () => {
    if (input.trim() === "") return;
    const newTask: Task = {
      id: Date.now(),
      text: input,
      completed: false,
    };
    setTasks([newTask, ...tasks]);
    setInput(""); // 입력창 초기화
  };

  // 체크박스 토글 (완료 여부 변경)
  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // 필터링된 리스트 반환
  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-6">
      {/* 헤더 부분 */}
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">📝 To-Do List</h1>
        <div className="space-x-2">
          <button className="text-xl hover:brightness-90">🌙</button>
          <button className="text-xl hover:rotate-12 transition">⚙️</button>
          <button className="text-xl hover:scale-110 transition">🌐</button>
        </div>
      </header>

      {/* 입력창과 추가 버튼 */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="새로운 할 일 추가..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 border rounded shadow-sm"
        />
        <button
          onClick={handleAddTask}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          추가
        </button>
      </div>

      {/* 필터 버튼 */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setFilter("all")}
          className={`px-3 py-1 rounded ${
            filter === "all" ? "bg-blue-300" : "bg-gray-200"
          }`}
        >
          모두
        </button>
        <button
          onClick={() => setFilter("active")}
          className={`px-3 py-1 rounded ${
            filter === "active" ? "bg-blue-300" : "bg-gray-200"
          }`}
        >
          진행중
        </button>
        <button
          onClick={() => setFilter("completed")}
          className={`px-3 py-1 rounded ${
            filter === "completed" ? "bg-blue-300" : "bg-gray-200"
          }`}
        >
          완료다
        </button>
      </div>

      {/* 할 일 리스트 */}
      <ul className="space-y-2">
        {filteredTasks.map((task) => (
          <li
            key={task.id}
            className={`flex items-center justify-between bg-white p-3 rounded shadow ${
              task.completed ? "line-through text-gray-400" : ""
            }`}
          >
            <span onClick={() => toggleTask(task.id)} className="cursor-pointer">
              {task.text}
            </span>
          </li>
        ))}
      </ul>

      {/* 푸터 */}
      <footer className="mt-10 text-sm text-center text-gray-500">
        By iamleeyj
      </footer>
    </div>
  );
};

export default App;
