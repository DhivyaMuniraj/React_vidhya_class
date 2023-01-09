import Update from "./Update";
import  Update_Delete from "./Update_Delete"
const TodoList = ({
  item,
  edit_item_id,
  new_todo_value,
  set_new_todo,
  updateToDo,
  deleteTask,
  updateTask
}) => {
    console.log("insie")
  if (item.id == edit_item_id) {
    
    return (
      <Update
        value={new_todo_value}
        update={updateToDo}
        onChange={(value) => {
          set_new_todo(value);
        }}
      />
    );
  } else {
    return (
      <>
        <Update_Delete item={item} delete_a={deleteTask} Update={updateTask} />
      </>
    );
  }
};
export default TodoList;
