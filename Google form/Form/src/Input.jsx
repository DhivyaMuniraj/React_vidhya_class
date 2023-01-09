
function Input({type,placeholder,value,onChange}) {
  console.log("Input render")
  return (
   <p><input type={type} placeholder={placeholder} value={value} onChange={(e)=>onChange(e.target.value)}></input></p>
  );
}
export default Input