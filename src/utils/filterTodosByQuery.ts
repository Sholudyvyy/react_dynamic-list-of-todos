import { Todo } from '../types/Todo';
import { TodoCompletedCategory } from '../types/todoCompletedCategory';

function filterTodos(
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

export function filterTodosByQuery(
  todos: Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
  todoCategory: TodoCompletedCategory,
  query: string,
) {
  setTodos(() => {
    return filterTodos(todos, todoCategory, query);
  });
}
