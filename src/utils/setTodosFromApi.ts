import { getTodos } from '../api';
import { Todo } from '../types/Todo';

export function setTodosFromApi(
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
) {
  getTodos()
    .then(setTodos)
    .catch(() => alert('Todos api is wrong!'))
    .finally(() => {
      setLoading(false);
    });
}
