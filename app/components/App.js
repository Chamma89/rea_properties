import React from 'react'
import Results from './Results'
import Saved from './Saved'
import _ from 'lodash'
import './Properties.scss'
import logo from './image/rea.jpg'

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.addProperty = this.addProperty.bind(this)
    this.removeProperty = this.removeProperty.bind(this)
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
    var add = true
    var newProp = this.state.property.results[index]
    var arr = this.state.property

    for (var key in arr.saved) {
      var obj = arr.saved[key];
      if(Number(obj.id) === index + 1){
        add = false
      }
    }
    if(add){
      arr.saved.push(newProp) 
    }
    this.setState({property: arr})
  }

  removeProperty(index){
    var newProp = this.state.property.saved[index]
    var arr = this.state.property
    arr.saved.splice(index, 1)
    this.setState({ property: arr })
  }

  render() {
    return (
      <section>
        <div className="main">
          <h1>REA C<img className="logoMain"src={logo}/> 
          ding Test</h1>
          <Saved remove={this.removeProperty} className="saved" add={this.addProperty} status="Saved Properties" property={this.state.property.saved} />
          <Results  add={this.addProperty} status="Results" property={this.state.property.results}/>
          <br/>
        </div>
      </section>
    )      
  }
}
