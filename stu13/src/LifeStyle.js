import React from 'react'
class LifeStyle extends React.Component{
  constructor(props){
    super(props)
    this.state={
      num:1
    }
  }
  //挂载前
  componentWillMount(){
    console.log('挂载前，上树前')
  }
  //挂载结束后，马上调用；可以操作dom元素
  componentDidMount(){
    console.log('挂载后')
  }
  //组件接受props数据被调用
  componentWillReceiveProps(){
    console.log('接收props数据被调用')
  }
  //当组件做出是否更新dom时调用
  shouldComponentUpdate(nextProps,nextState){
    console.log(nextProps)
    console.log(nextState)
    console.log('即将更新')
    return true
  }
  //在组件更新发生之前被调用
  componentWillUpdate(){
    console.log('组件更新之前被调用')
  }
  //组件更新被调用
  componentDidUpdate(){
    console.log('组件更新被调用')
  }
  //组件销毁被调用
  componentWillUnmount(){
    console.log('组件销毁被调用')
  }
  add(){
    this.setState({
      num:Math.random()
    })
  }
  render(){
    return (
      <div data-a='jon' className="hello">
        hello klren {this.state.num}
        <input type="button" ref='input' onClick={this.add.bind(this)} value='更新' name='button'/>
      </div>
    )
  }
}

export default LifeStyle