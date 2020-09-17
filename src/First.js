import React from 'react'
import Second from './Second'

class First extends React.Component{
  render(){
    return(
      <div style={{border:'1px solid',margin:'5px',padding:'5px'}}>
        <h4>First component </h4>
        <Second></Second>
      </div>
    )
  }
}

export default First;