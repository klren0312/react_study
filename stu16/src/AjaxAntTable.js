import React from 'react'
import {Table} from 'antd'
import request from './utils'

class AjaxAntTable extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      data:[]
    }
  }
  componentDidMount(){
    let options = {}
    options.url = '/console/menu/select'
    options.method = 'get'
    request(options)
      .then(function(res){
        console.log(res)
      })
  }
  render(){
    const columns = [{
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    }, {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    }, {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <span>
          <button>test</button>
        </span>
      ),
    }];

    const data=[]
    return(
      <div>
        <Table column={columns} dataSource={data} />
      </div>
    )
  }
}

export default AjaxAntTable