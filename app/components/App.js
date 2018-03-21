import React from 'react'
import Results from './Results'

export default class App extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>REA Coding-Test</h1>
        <Results />
      </div>
    )      
  }

}
