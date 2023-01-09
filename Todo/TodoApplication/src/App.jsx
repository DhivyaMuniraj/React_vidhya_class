import React from "react";
import { useState } from "react";
import { v4 as uuidv4, v4 } from "uuid";
const App = () => {
  //STATE FOR INPUT VALUE IN TO-DO
  const [todo_input_value, set_To_Do_Input] = useState("");
  const [todo_output_list, set_To_Do_Output] = useState([]);
  const [edit_item_id, set_edit_item_id] = useState(null);
  const [new_todo_value, set_new_todo] = useState("");

  //ADD TASK TO LIST
 const renderTask = () => {
    if (!todo_input_value) {
      return alert("Enter a task");
    }
   set_To_Do_Output((last_To_Do_Output) => [
      ...last_To_Do_Output,

      { title: todo_input_value, id: v4() },
    ]);

    set_To_Do_Input("");
  };

  //DELETE TASK

  const deleteTask = (id) => {
    set_To_Do_Output((todo_output_list) => {
      return todo_output_list.filter((item) => item.id !== id);
    });
  };

  //UPDATE TASK

  const updateTask = (item) => {
    set_edit_item_id(item.id);
  };

  const updateToDo = () => {
    set_To_Do_Output((prevState) => {
      return prevState.map((items, index) => {
        if (items.id == edit_item_id) {
          items.title = new_todo_value;
        }

        return items;
      });
    });

    set_edit_item_id(null);

    set_new_todo("");
  };

  return (
    <>
      <h3>Enter a task</h3>

      <input
        placeholder="Enter a task"
        value={todo_input_value}
        onChange={(e) => set_To_Do_Input(e.target.value)}></input>

      <button onClick={renderTask}>Add</button>

      <h3> The tasks are</h3>

      {todo_output_list.map((item, index) => {
        if (item.id === edit_item_id) {
          return (
            <div>
              <input
                value={new_todo_value}
                placeholder="Enter to update the todo"
                onChange={(e) => set_new_todo(e.target.value)}></input>

              <button onClick={updateToDo}>update</button>
            </div>
          );
        } else {
          return (
            <div>
              <h2 key={index}>{item.title}</h2>

              <button onClick={() => deleteTask(item.id)}>Delete task</button>

              <button onClick={() => updateTask(item)}>Update task</button>
            </div>
          );
        }
      })}
    </>
  );
};

export default App;
