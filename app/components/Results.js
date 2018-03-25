import React from 'react'
import './Properties.scss'



export default class Results extends React.Component {

  constructor(props) {
    super(props)
    this.onSave = this.onSave.bind(this) 
  }

  onSave(index) {
    console.log("You're clicking Save")
    if (this.props.status === "Results") {
      var arr = this.props.add(index)
    }
    else {
      console.log("this is already saved")
    }
  }

  
  render() {
    console.log(this.props.index)
   const property = this.props.property
  
    return (
      <table className="main">
          <h1>{this.props.status}</h1>
          {console.log(property)}
        {
          property.map((property, index) =>

            <tbody onClick={this.onSave.bind(this, index)} style={{ backgroundColor: property.agency.brandingColors.primary }} index={index} key={index}>
              <tr>
                <td className="logo"><img src={property.agency.logo} /></td>
              </tr>
              {console.log(index)}

              <tr>
                <td><img src={property.mainImage} index={index} /></td>
              </tr>

              <tr>
                <td>{property.price}</td>
              </tr>
            </tbody>  
          )
        }
      </table>
    )      
  }

}


