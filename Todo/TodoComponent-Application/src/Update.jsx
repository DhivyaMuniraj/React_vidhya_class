import Input from "./Input";
const Update = ({ value, update, onChange}) => {
  return (
    <div>
      <Input placeholder="Enter the input" type="text" value={value} onChange={onChange}/>
      <button onClick={update}>update</button>
    </div>
  );
};
export default Update;
