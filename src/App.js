import React from "react";
import "./style.css";
import First from './First'
export const MyContext = React.createContext('this context API')

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      firstName: 'uday',
      age:25
    }
  }

  incAge =()=>{ 
    this.setState({age:age+1})
  }
  render(){
    return(
      <MyContext.Provider value={this.state}>
      <div style={{border:'1px solid',margin:'5px',padding:'5px'}}>
      <h1>App Component</h1>
      <h1>{this.state.firstName} --- {this.state.age}
      <button onClick={this.incAge}>Click</button></h1>
      <First></First>
      </div>
      </MyContext.Provider>
    )
  }
}

export default App;


