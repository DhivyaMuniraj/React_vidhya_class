const Input=({value,name ,type ,placeholder ,onChange})=>{
    return(
<input value={value} name={name} type={type} placeholder={placeholder} onChange={(e)=>onChange(e.target.value)}></input>
)}
export default Input