import { useDispatch, useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { clearTodo } from "../../redux/features/todoSlice";

const TodoList = () => {
  const dispatch = useDispatch()
  const handleClearList = () => {
    dispatch(clearTodo())
  };
  const todoList  = useSelector((state) => state.todo.todoList)
  return (
    <div>
      <div>
        {todoList.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </div>
      <div className="clear-wrapper">
        <button onClick={handleClearList} className="clear-button">
          Clear
        </button>
      </div>
    </div>
  );
};

export default TodoList;
