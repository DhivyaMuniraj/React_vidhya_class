import React from "react";
import { useState } from "react";
import { v4 as uuidv4, v4 } from "uuid";
const App = () => {
  
  //STATE
  const [input_value, set_input_value] = useState("");
  const [output_value, set_output_value] = useState([]);
  const [edit_item_id, set_edit_item_id] = useState(null);
  const [new_todo_value, set_new_todo] = useState("");

  //ADD TASK 
  const renderTask = () => {
    if (!input_value) {
      return alert("Enter a task");
    }
    set_output_value((last_To_Do_Output) => [
      ...last_To_Do_Output,

      { title: input_value, id: v4() },
    ]);

    set_input_value("");
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
    set_output_value((prevState) => {
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
        value={input_value}
        onChange={(e) => set_input_value(e.target.value)}></input>

      <button onClick={renderTask}>Add</button>

      <h3> The tasks are</h3>

      {output_value.map((item, index) => {
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
