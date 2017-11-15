import React from 'react'
// import './helper.js'
class RequestStu extends React.Component{
  constructor(props){
    super(props)
    this.state={
      test:{},
      arr:[]
    }
  }
  componentDidMount(){
    fetch('http://139.196.76.185:8083/console/scene/scenedetaillist',{
      method:'GET',
      headers:{
        'Content-Type':'application/json;charset=UTF-8'
      },
      mode:'cors',
      cache:'default'
    })
     .then(res =>res.json())
     .then((data) => {
       console.log(data)  
       this.setState({
         test:data
       },function(){
         console.log(this.state.test)
         let com = this.state.test.retBody.map((item,index)=>{
           console.log(item.id)
           return <li key={index}>{item.name}</li>
         })
         this.setState({
           arr : com
         },function(){
           console.log(this.state.arr)
         })
       })
     }) 
  }

  render(){
    return (
      <div>
       <ul>
          {
            this.state.arr
          }
       </ul>
      </div>
    )
  }
}

export default RequestStu