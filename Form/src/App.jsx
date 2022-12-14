import { Component } from "react"
import "./index.css"

export class Form extends Component {
   state={
    Name:"",
    Gender:"",
    Place:"",
    Date:"",
    Bus:"",
    Range:"",
    Thoughts:""
   }
   render(){
    return(
       <>
       <div className="main_div">
       <div className="form_div">
        <h1>Form</h1>
       <div>
        
          <label for="name">Name : </label>
          <input type="text" id="name"  name="name" value={this.state.Name} onChange={(e)=>{
             this.setState({Name:e.target.value})
          }}></input>
        </div>
    
      <div>
          <label>Gender : </label>
          <label for="Male">Male</label>
          <input type="radio" id="Male" name="gender" value={"Male"} onChange={(e)=>{
             this.setState({Gender:e.target.value})
          }}></input>
          <label for="Female">Female</label>
          <input type="radio" id="Female"  name="gender" value={"Female"} onChange={(e)=>{
             this.setState({Gender:e.target.value})
          }}></input>
      </div>

      <div>
          <label>Travelling Place : </label>
          <label for="Ooty">Ooty</label>
          <input type="checkbox" id="Ooty" name="ooty" value={"Ooty"} onChange={(e)=>{
             this.setState({Place:e.target.value})
          }}></input>
          <label for="Kerala">Kerala</label>
          <input type="checkbox" id="Kerala" name="kerala" value={"Kerala"} onChange={(e)=>{
            this.setState({Place:e.target.value})
          }}></input>
      </div>

      <div>
        <label for="date">Choose Travel Date : </label>
        <input type="date" id="date" name="date"value={this.state.Date} onChange={(e)=>{
             this.setState({Date:e.target.value})
          }}></input>
      </div>

      <div>
      <label for="bus">Choose a Bus : </label>

        <select id="bus" onChange={(e)=>{this.setState({Bus:e.target.value})}}>
          <option value={"KPN Travel"}  name="kpn travel">KPN Travel</option>
          <option value={"Krish Travel"} name="krish travel">Krish Travel</option>
        </select>
      </div>

      <div>
        <label for="amount">Choose Amount Range : </label>
        <input type="range" id="amount"  name="range" min="0" max="500" value={this.state.Range} onChange={(e)=>{
          this.setState({Range:e.target.value})
        }}></input>
      </div>

      <div>
        <p> Boarding Address: </p>

        <textarea placeholder="Type a address"  name="address"start="0" rows="10" cols="40" value={this.state.Thought} onChange={(e)=>{
          this.setState({Thought:e.target.value})
        }}></textarea>
      </div>
     </div> 
      <div className="result_div">
        <h1>Result</h1>
        <p>Name: {this.state.Name}</p>
        <p>Gender: {this.state.Gender}</p>
        <p>Place: {this.state.Place}</p>
        <p>Date: {this.state.Date}</p>
        <p>Bus: {this.state.Bus}</p>
        <p>Range: {this.state.Range}</p>
        <p>Thought: {this.state.Thought}</p>
      </div>
      </div>
       </>
    )
   }
 
}



