import React, { useState } from "react";
import "./index.css"; // Pretendard 폰트 반영 (index.css에 정의했다고 가정)

// 할 일(Task) 객체 타입 정의
type Task = {
  id: number;
  text: string;
  completed: boolean;
};

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  // ✅ 할 일 추가
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

  // ✅ 완료 상태 토글
  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // ✅ 필터링된 할 일 리스트
  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <div className="min-h-screen bg-[#acdedb] text-gray-900 p-6 font-pretendard">
      {/* 상단 헤더 */}
      <header className="flex justify-between items-center mb-6 bg-[#f5bcb6] py-4 px-6 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-white">📝 To-Do List</h1>
        <div className="space-x-2">
          <button className="text-xl hover:brightness-110 transition">🌙</button>
          <button className="text-xl hover:rotate-12 transition">⚙️</button>
          <button className="text-xl hover:scale-110 transition">🌐</button>
        </div>
      </header>

      {/* 입력창 + 추가 버튼 */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="오늘의 할 일을 입력해보세요."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-3 rounded-lg border border-[#f5bcb6] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#f5bcb6]"
        />
        <button
          onClick={handleAddTask}
          className="bg-[#f5bcb6] text-white px-4 py-2 rounded-lg hover:bg-[#e9a59f] transition shadow-md"
        >
          추가
        </button>
      </div>

      {/* 필터 버튼 */}
      <div className="flex gap-2 mb-6">
        {["all", "active", "completed"].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type as typeof filter)}
            className={`px-4 py-2 rounded-full font-semibold transition ${
              filter === type
                ? "bg-white text-[#f5bcb6] shadow-md"
                : "bg-[#f5bcb6] text-white hover:bg-opacity-80"
            }`}
          >
            {type === "all"
              ? "전체"
              : type === "active"
              ? "진행중"
              : "완료"}
          </button>
        ))}
      </div>

      {/* 할 일 리스트 */}
      <ul className="space-y-3">
        {filteredTasks.map((task) => (
          <li
            key={task.id}
            className={`flex justify-between items-center px-4 py-3 bg-white rounded-xl shadow hover:shadow-md transition cursor-pointer ${
              task.completed ? "line-through text-gray-400" : ""
            }`}
            onClick={() => toggleTask(task.id)}
          >
            <span className="truncate">{task.text}</span>
            <span className="text-lg">
              {task.completed ? "✅" : "☑️"}
            </span>
          </li>
        ))}
      </ul>

      {/* 푸터 */}
      <footer className="mt-10 text-center text-white text-sm opacity-80">
        © 2025 iamleeyj — Designed with iamleeyj
      </footer>
    </div>
  );
};

export default App;
``