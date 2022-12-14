import './App.css'
import {Component} from "react"
class App extends Component {
  state={
    Name :"",
    Password:"",
    Address:""
  }
  handleInput=(e)=>{
    console.log(e.target)
  const {name,value}=e.target
  this.setState({
    [name]:value
  })
  }
  
render(){
    const {Name,Password,Address}= this.state
return (
   <>
   <div>
    <div>
      <label for="name">Name</label>
      <input type="text" name="Name" id="name" value={Name} onChange={this.handleInput}></input>
    </div>
    <div>
      <label for="pass">Password</label>
      <input type="password" name="Password" id="pass" value={Password} onChange={this.handleInput}></input>
    </div>
    <div>
      <label for="addres">Address</label>
      <input type="text" name="Address" id="addres" value={Address} onChange={this.handleInput}></input>
    </div>
   </div>
   <div>
    <p>Name:{this.state.Name}</p>
    <p>Password:{this.state.Password}</p>
    <p>Address:{this.state.Address}</p>
   </div>
   </>
  )
}
}

export default App
