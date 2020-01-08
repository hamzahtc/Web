import React, { Component } from 'react'
import Markdown from 'markdown-to-jsx';
import './App.css'
export default class App extends Component {
  state = {
    text : ''
  }
  changeValue = (e) => {
    this.setState({
      text : e.target.value
    })
  }
  render() {
    return (
      <div>
        <p>Markdown</p>
        <textarea value={this.state.text} onChange={this.changeValue}>

        </textarea>

        <Markdown id="markdown">
        {this.state.text}
        </Markdown>

      </div>
    )
  }
}
