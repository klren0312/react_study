import React from 'react'

class HelloMessage extends React.Component{
  render(){
    const word = 'is good'
    const isGoodWord = 'true'
    return (
      <div>
        <h1>React 小书 {word}</h1>
        <p>
          {
            (function(){
              return 'is very good'
            })()
          }
        </p>
        <h3>
          {
            isGoodWord
            ? <strong>good</strong>
            : <strong>bad</strong>
          }
        </h3>
      </div>
    )
  }
}

export default HelloMessage