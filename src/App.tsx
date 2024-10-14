/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';

import { TodoList } from './components/TodoList';
import { TodoFilter } from './components/TodoFilter';
import { Todo } from './types/Todo';
import { TodoModal } from './components/TodoModal';
import { Loader } from './components/Loader';
import { getTodoById } from './utils/getTodoById';
import { TodoCompletedCategory } from './types/todoCompletedCategory';
import { setTodosFromApi } from './utils/setTodosFromApi';
import { filterTodosByQuery } from './utils/filterTodosByQuery';

export const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [visibleTodos, setVisibleTodos] = useState<Todo[]>([]);
  const [electTodoId, setElectTodoId] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [query, setQuery] = useState<string>('');
  const [todoCategory, setTodoCategory] = useState<TodoCompletedCategory>(
    TodoCompletedCategory.all,
  );

  useEffect(() => {
    setTodosFromApi(setTodos, setLoading);
  }, []);

  useEffect(() => {
    filterTodosByQuery(todos, setVisibleTodos, todoCategory, query);
  }, [todos, query, todoCategory]);

  return (
    <>
      <div className="section">
        <div className="container">
          <div className="box">
            <h1 className="title">Todos:</h1>

            <div className="block">
              <TodoFilter
                query={query}
                onQuery={setQuery}
                todoCategory={todoCategory}
                onTodoCategory={setTodoCategory}
              />
            </div>

            <div className="block">
              {loading && <Loader />}
              {!loading && (
                <TodoList
                  todos={visibleTodos}
                  electTodoId={electTodoId}
                  onElectTodoId={setElectTodoId}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {electTodoId !== 0 && (
        <TodoModal
          todo={getTodoById(visibleTodos, electTodoId)}
          onElectTodoId={setElectTodoId}
        />
      )}
    </>
  );
};
