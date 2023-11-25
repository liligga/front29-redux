import { useSelector, useDispatch } from "react-redux";
import { DeleteIcon } from "./UI/icons";
import { removeTodo } from "../store/todosReducer";

// const todoItems = [
//   { id: 1, name: "Item 1" },
//   { id: 2, name: "Item 2" },
//   { id: 3, name: "Item 4" },
// ];

const TodoTable = () => {
  const items = useSelector((state) => state.todos.items);
  const dispatch = useDispatch();

  const handleDeleteClick = (id) => {
    dispatch(removeTodo(id));
  };

  const handleCheckClick = (id) => {
    console.log(id);
  };

  return (
    <>
      <div className="grid grid-cols-1 grid-rows-min gap-2 w-full max-w-lg text-sm text-left text-gray-table-auto border-collapse border-spacing-2 @container">
        {items.map((item) => (
          <div
            key={item}
            className="hover:bg-slate-200 bg-white rounded-md flex items-center gap-2 p-2 [&>*]:flex [&>*]:items-center"
          >
            <div>
              <input
                type="checkbox"
                className="default:ring-2 checked:bg-green invisible @sm:visible"
                onClick={() => handleCheckClick(item)}
              />
            </div>
            <div className="flex-grow flex-shrink-0">{item}</div>
            <div>
              <button
                className="text-red-500 px-2 rounded-sm text-base"
                onClick={() => handleDeleteClick(item)}
              >
                <DeleteIcon />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TodoTable;
