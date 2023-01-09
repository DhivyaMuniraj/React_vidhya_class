function Result({displayForm,data}){
    console.log("lo")
    {displayForm && data.map((item)=>{return(
       <p key={item.id}>{item.value}</p>
    )})}
}
export default Result