import React from 'react';
import { Todo } from '../../types/Todo';
import classNames from 'classnames';

type Props = {
  TodoElement: Todo;
  isSelected: boolean;
  onElectTodoId: React.Dispatch<React.SetStateAction<number>>;
};

export const TodoLine: React.FC<Props> = ({
  TodoElement,
  isSelected,
  onElectTodoId,
}) => {
  return (
    <tr
      data-cy="todo"
      className={classNames({ 'has-background-info-light': isSelected })}
    >
      <td className="is-vcentered">{TodoElement.id}</td>
      <td className="is-vcentered">
        {TodoElement.completed && (
          <span className="icon" data-cy="iconCompleted">
            <i className="fas fa-check" />
          </span>
        )}
      </td>
      <td className="is-vcentered is-expanded">
        <p
          className={classNames({
            'has-text-danger': !TodoElement.completed,
            'has-text-success': TodoElement.completed,
          })}
        >
          {TodoElement.title}
        </p>
      </td>
      <td className="has-text-right is-vcentered">
        <button
          data-cy="selectButton"
          className="button"
          type="button"
          onClick={() => {
            onElectTodoId(TodoElement.id);
          }}
        >
          <span className="icon">
            <i
              className={classNames('far', {
                'fa-eye': !isSelected,
                'fa-eye-slash': isSelected,
              })}
            />
          </span>
        </button>
      </td>
    </tr>
  );
};
