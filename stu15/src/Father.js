import React from 'react'
import Son from './Son'
class Father extends React.Component{
  constructor(props){
    super(props)
    this.state={
      visible:false,
      message:"我是父组件传来的"
    }
  }
  /**
   * 进入
   */
  goIn(){
    this.setState({
      visible:true
    })
  }
  /**
   * 取消
   * @param mode true/false
   */
  cancel(mode){
    console.log(mode)
    this.setState({
      visible:mode
    })
  }
  render(){
    return(
      <div style={{background:"red",padding:"30px"}}>
      {
        this.state.visible ?
        <div style={{background:"yellow"}}>
          <Son msg={this.state.message} cancel={mode=>this.cancel(mode)}/>
        </div>
        :
        <div style={{background:"blue"}}>
          <button onClick={this.goIn.bind(this)} style={{width:"100px",height:"50px"}}>进入</button>
        </div>
      }
      </div>
    )
  }
}

export default Father