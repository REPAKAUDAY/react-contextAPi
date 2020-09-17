import React from 'react'
import { MyContext } from './App'
class Fourth extends React.Component{


  render(){
    return(
      <MyContext.Consumer>
      {
        (data)=>{
          return(
          <div style={{border:'1px solid',margin:'5px',padding:'5px'}}>
            <h4>Fourth component</h4>
            <h1>{data.firstName}</h1>
            <h1>{data.age}</h1>
          </div>
          )
          
        }
      }
      </MyContext.Consumer>
      
    )
  }
}

export default Fourth;