import React from 'react'

class Son extends React.Component{
  render(){
    console.log(this.props.msg)
    return(
      <div>
        <button style={{width:"100px",height:"50px"}} onClick={()=>{this.props.cancel(false)}}>返回</button>
        父组件传到子组件的信息：<span style={{background:"white"}}>{this.props.msg}</span>
      </div>  
    )
  }
}

export default Son