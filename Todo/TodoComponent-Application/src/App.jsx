import React from "react";
import { useState } from "react";
import { v4 as uuidv4, v4 } from "uuid";
import Input from "./Input";
import TodoList from "./Todolist";

const To_Do_App_Create = () => {
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

  //update
  const updateToDo = () => {
    console.log(todo_output_list);
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
  //delete
  const deleteTask = (id) => {
    console.log(id);
    set_To_Do_Output((todo_output_list) => {
      return todo_output_list.filter((item) => item.id !== id);
    });
  };

  //UPDATE TASK

  const updateTask = (item) => {
    set_edit_item_id(item.id);
    set_new_todo(item.title);
  };

  return (
    <>
      <h3>Enter a task</h3>

      <Input
        placeholder={"Enter the task"}
        value={todo_input_value}
        name={"input"}
        type={"text"}
        onChange={(value) => {
          console.log(value);
          return set_To_Do_Input(value);
        }}
      />

      <button onClick={renderTask}>Add Task</button>

      <h3> The tasks are</h3>

      {todo_output_list.map((item) => {
        return(
        <TodoList
          item={item}
          edit_item_id={edit_item_id}
          new_todo_value={new_todo_value}
          set_new_todo={set_new_todo}
          updateToDo={updateToDo}
          deleteTask={deleteTask}
          updateTask={updateTask}
        />)
        
      })}
    </>
  );
};

export default To_Do_App_Create;
