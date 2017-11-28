import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

class EmojiResultsRow extends React.Component{
  render(){
    const codePointHex = this.props.symbol.codePointAt(0).toString(16)
    const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`
    return(
      <div>
        <img 
          src={src}
          alt={this.props.title}
        />
        <span
          className="title"
        >
          {this.props.title}
        </span>
      </div>
    )
  }
}

EmojiResultsRow.propTypes = {
  title: PropTypes.string,
  symbol: PropTypes.string,
}

export default EmojiResultsRow