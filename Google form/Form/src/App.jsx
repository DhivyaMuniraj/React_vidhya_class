import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { v4 } from "uuid";
import InputType from "./TypeOfInput";
import Input from "./Input";

function App() {
  const [type, setType] = useState("");
  const [placeholder, setPlaceholder] = useState("");
  const [data, setData] = useState([]);
  const [displayForm, setDisplayForm] = useState(false);

  console.log("Parent render");

  const addField = () => {
    if (placeholder !== "" && type !== "") {
      setData((prev) => [
        ...prev,
        { id: v4(), type: type, placeholder: placeholder, value: "" },
      ]);
      setType("");
      setPlaceholder("");
    } else {
      alert("Kindly fill the requirements");
    }
  };


  const dataSetting = (value, id) => {
    setData((prev) => {
      return prev.map((elem) =>
        elem.id === id ? { ...elem, value: value } : elem
      );
    });
  };

  return (
    <>
      <div className="header">
        <div>
          <p>ENTER THE TYPE OF INPUT</p>

          <InputType setType={setType} type={type} />
        </div>

        <div>
          <p>Type the Placeholder</p>
          <Input
            type="text"
            value={placeholder}
            onChange={(value) => setPlaceholder(value)}
          />
        </div>

        <div>
          <button onClick={addField}>ADD</button>
        </div>
      </div>

      {data.map((item) => {
        return (
          <Input
            value={item.value}
            key={item.id}
            type={item.type}
            placeholder={item.placeholder}
            onChange={(value) => dataSetting(value, item.id)}></Input>
        );
      })}
      <button onClick={() => {setDisplayForm(true);return <Result/>} }>Submit</button>

      {displayForm &&
        data.map((item) => {
          return <p key={item.id}>{item.value}</p>;
        })}
    </>
  );
}

export default App;
