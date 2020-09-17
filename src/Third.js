import React from 'react'
import Fourth from './Fourth'

class Third extends React.Component{
  render(){
    return(
      <div style={{border:'1px solid',margin:'5px',padding:'5px'}}>
        <h4>Third component</h4>
        <Fourth></Fourth>
      </div>
    )
  }
}

export default Third;