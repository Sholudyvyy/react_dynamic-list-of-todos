import { Todo } from '../types/Todo';

export function filterTodos(
  todos: Todo[],
  todoCategory: string,
  query: string,
): Todo[] {
  if (todoCategory === 'active') {
    return todos.filter(
      todo => !todo.completed && todo.title.toLowerCase().includes(query),
    );
  }

  if (todoCategory === 'completed') {
    return todos.filter(
      todo => todo.completed && todo.title.toLowerCase().includes(query),
    );
  }

  return todos.filter(todo => todo.title.toLowerCase().includes(query));
}
