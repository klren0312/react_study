import React from 'react'
import './index.css'

class Header extends React.Component{
  render(){
    return (
      <header className="component-header">
        <img 
          src="//cdn.jsdelivr.net/emojione/assets/png/1f638.png"
          alt="t"
          role="presentation"
          width="32"
          height="32"
        />
        Emoji Search
        <img 
          src="//cdn.jsdelivr.net/emojione/assets/png/1f63a.png" 
          alt="t"
          role="presentation"
          width="32"
          height="32"
        />
      </header>
    )
  }
}
export default Header 