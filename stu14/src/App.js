import React from 'react'
import Header from './component/Header/index'
import SearchInput from './component/SearchInput/index'
import filterEmoji from './utils/filterEmoji'
import EmojiResults from './component/EmojiResults/index'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      filteredEmoji:filterEmoji('', 20)
    }
  }

  handleSearchChange = (event)=>{
    this.setState({
      filteredEmoji:filterEmoji(event.target.value,20)
    })
  }

  render(){
    return (
      <div>
        <Header/>
        <SearchInput
          textChange={this.handleSearchChange}
        />

        <EmojiResults
          emojiData={this.state.filteredEmoji}
        />
      </div>
    )
  }
}

export default App
