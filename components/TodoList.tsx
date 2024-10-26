import React from 'react';
import { Todo } from '../types/todo';
import TodoItem from './TodoItem';

interface TodoListProps {
  todos: Todo[];
  toggleComplete: (id: string) => void;
  removeTodo: (id: string) => void;
  editTodo: (id: string, newText: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleComplete, removeTodo, editTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}
          editTodo={editTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
