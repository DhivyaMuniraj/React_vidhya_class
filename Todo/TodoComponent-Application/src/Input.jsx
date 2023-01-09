const Input=({placeholder,value,name,onChange,type})=>{
      return(
        <>
        <input placeholder={placeholder} 
        type={type} value={value} name={name} onChange={(e)=>{
            console.log("input",e)
          onChange(e.target.value)}}></input>
       </>
      )

}
export default Input