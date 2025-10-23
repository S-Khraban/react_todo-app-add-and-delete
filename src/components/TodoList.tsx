import type { Todo } from '../types/Todo';
import { TodoItem } from './TodoItem';

type Props = {
  todos: Todo[];
  tempTodo: Todo | null;
  pendingIds: Set<number>;
  onDelete: (id: number) => void;
};

export const TodoList: React.FC<Props> = ({
  todos,
  tempTodo,
  pendingIds,
  onDelete,
}) => {
  const items = [...todos, ...(tempTodo ? [tempTodo] : [])];

  return (
    <section className="todoapp__main" data-cy="TodoList">
      {items.map(todo => (
        <div key={todo.id}>
          <TodoItem
            todo={todo}
            isPending={pendingIds.has(todo.id)}
            onDelete={onDelete}
          />
        </div>
      ))}
    </section>
  );
};
