import React from 'react'
import Third from './Third'

class Second extends React.Component{
  render(){
    return(
      <div style={{border:'1px solid',margin:'5px',padding:'5px'}}>
        <h4>Second component</h4>
        <Third></Third>
      </div>
    )
  }
}

export default Second;