 import {memo} from 'react'
 function InputType(props){

  console.log("select option render")
   return(
       
          <select
            onChange={(e) => {
              props.setType(e.target.value); 
            }} value={props.type}>
            <option value="">Enter the type</option>
            <option value="text">Text</option>
            <option value="password">Password</option>
            <option value="date">Date</option>
          </select> 
   )
 }
 export default memo(InputType)