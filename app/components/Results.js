import React from 'react'
import './Properties.scss'



export default class Results extends React.Component {

  constructor(props) {
    super(props)
    this.onSave = this.onSave.bind(this) 
  }

  onSave(index) {
    var arr = this.props.add(index)
  }
  
  render() {
    const property = this.props.property
    
    return (
      <table className="mainResults">
        <h2>{this.props.status}</h2>
        {                          
          property.map((property, index) =>
            <tbody style={{ backgroundColor: property.agency.brandingColors.primary }} index={index} key={index}>
              <tr>
                <td className="logo"><img src={property.agency.logo} /></td>
              </tr>
              <tr>
                <td><img src={property.mainImage} index={index} /></td>
              </tr>
              <tr>
                <td className="price">{property.price}</td>
              </tr>
              <button onClick={this.onSave.bind(this, index)} className="buttonResults">Add <i class="fas fa-plus-circle"></i></button>
            </tbody>  
          )
        }
      </table>
    )      
  }
}


