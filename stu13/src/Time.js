import React from 'react'

var timer = null
class Time extends React.Component{
  constructor(props){
    super(props)
    this.state={
      a:100
    }
  }
  time(cal){
    //时间接口
    var second = cal.split(':')[2]
    var miu = cal.split(':')[1]
    var hour = cal.split(':')[0]
    second--
    if(second < 10){
      second = '0'+second
    }
    else if(miu <= 0){
      miu = 60
      hour -= 1
      if(hour < 10){
        hour = '0' + hour
      }
    }
    else if(hour <= 0){
      hour = '00'
      if(miu <= 0){
        miu = '00'
        if(second <= 0){
          second = '00'
          clearInterval(timer)
        }
      }
    }
    return (hour+':'+miu+ ':'+second)
  }

  componentDidMount(){
    timer = setInterval(function(){
      this.refs.timeP.innerHTML = this.time(this.refs.timeP.innerHTML)
    }.bind(this),1000)
  }

  componentWillUnmount(){
    clearInterval(timer)
  }

  render(){
    return(
      <div>
        <p ref='timeP'>23:48:50</p>
      </div>
    )
  }
}

export default Time