import React from 'react'

class AjaxTable extends React.Component{
  render(){
    const headers = ['id','bookName','Author','Language','Published','Sales']
    const data = [
      ['1','Tfd rod','J.F','English','1954-1955','150milion'],  
      ['2','Td rod','E.A','English','1904-1965','250milion'],  
      ['3','Tsc rod','S.F','English','1944-1987','550milion'],  
      ['4','Tfg rod','J.O','English','1923-1951','190milion'],  
      ['5','Txfe rod','U.P','English','1914-1947','230milion'] 
    ]
    return(
      <div>
        <table border="2">
          <thead>
            <tr>
              {
                headers.map((head,index)=>
                  <th key={index}>{head}</th>
                )
              }
            </tr>
          </thead>
          <tbody>
            {
              data.map((row,index)=>{
                return (
                  <tr key={row[0]}>
                    {
                      row.map((cell,index)=>{
                        return <td>{cell}</td>
                      })
                    }
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default AjaxTable