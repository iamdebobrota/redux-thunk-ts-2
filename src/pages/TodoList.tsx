import { TodoType } from "../redux/todo-reducer/action-type";

interface TodoListProps {
  todos: TodoType[];
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <div>
      {todos &&
        todos.map((el) => {
          return (
            <div key={el.id}>
              <h4>
                {el.title} - {el.status ? "Completed" : "Pending"}
              </h4>
            </div>
          );
        })}
    </div>
  );
};

export default TodoList;
