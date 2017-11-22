 import React from 'react'

 class TimeSet extends React.Component{
   constructor(props){
     super(props)
     //设置初始时间
     this.state={
       time : Date.now()
     }
   }

   componentDidMount(){
     // 每秒更新一下时间
     this.timer = setInterval(()=>{
       this.setState({
         time: Date.now()
       })
     },1000)
   }

   componentWillUnmount(){
     //当不再渲染，停止计时器
     clearInterval(this.timer)
   }

   render(){
     let time = new Date(this.state.time).toLocaleTimeString()
     return (
       <span>{time}</span>
     )
   }
 }

 export default TimeSet