import React from 'react'
import request from './helper.js'
class RequestDemo extends React.Component{


  componentDidMount(){
    request({
      url:'/posttest',
      method:'post',
      data:{"Header":{"AccessToken":"eyJ0eXBlIjoiSldUIiwiYWxnIjoiSFM1MTIifQ.eyJzdWIiOiIxMDYiLCJleHBpciI6MTUxMDczODAzNjA5MiwiaXNzIjoiIn0.eo000vRNb_zQOibg_ndhlWbi27hPt3KaDwVk7lQiS5NJ4GS4esaaXxfoCbRc7-hjlyQ8tY_NZ24BTVLwUEoXlA"},"Body":{}}
    }).then(function(res){
      console.log(res)
    })
  }
  render(){
    return (
      <div>
    test
      </div>
    )
  }
}
export default RequestDemo