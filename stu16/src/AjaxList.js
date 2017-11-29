import React from 'react'
import request from './utils'
class AjaxList extends React.Component{
  constructor(props){
    super(props)
    this.state={
      data:[]
    }
  }

  componentDidMount(){
    let options = {}
    options.url = 'http://139.196.76.185:8083/console/scene/scenedetaillist'
    options.methods = 'get'
    request(options)
      .then(function(res){
        console.log(res.retBody)
        this.setState({
          data:res.retBody
        })
      }.bind(this))
  }

  render(){
    return (
      <div>
        {
          this.state.data.map((elem,index) => {
            return <li>{elem.name}</li>
          })
        }
      </div>
    )
  }
}

export default AjaxList