import React from 'react'
import Results from './Results'
import _ from 'lodash'
import './Properties.scss'

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.addProperty = this.addProperty.bind(this)
    this.state = {
      property: {
        results: [],
        saved: []
      },
    }
  }

  componentDidMount() {
    let localDomain = 'http://localhost:3000/db'
    fetch(`${localDomain}`)
      .then(res => res.json())
      .then(res => {
        this.setState({ property: res })
      })
  }

  addProperty(index) {
    var newProp = this.state.property.results[index]
    console.log(newProp)
    var arr = this.state.property
    arr.saved.push(newProp)
    this.setState({property: arr})

  }

  render() {
    return (
      <div>
        <h1>Property Coding-Test</h1>
        <Results  add={this.addProperty} status="Results" property={this.state.property.results}/>
        <br/>
        <Results className="saved" add={this.addProperty} status="Saved" property={this.state.property.saved} />
      </div>
    )      
  }

}
