/* components/TodoList.tsx */
import { TodoItem } from "./TodoItem";

type Todo = {
  id: number;
  text: string;
};

type Props = {
  todos: Todo[];
  onDelete: (id: number) => void;
};

export function TodoList({ todos, onDelete }: Props) {
  return (
    <ul className="w-full max-w-md">
      {todos.map(todo => (
        <TodoItem key={todo.id} id={todo.id} text={todo.text} onDelete={onDelete} />
      ))}
    </ul>
  );
}
