import React from 'react'
import './Properties.scss'



export default class Saved extends React.Component {

    constructor(props) {
        super(props)
        this.onRemove = this.onRemove.bind(this)
    }


    onRemove(index) {
        console.log("You're clicking Remove")
        if (this.props.status === "Saved") {
            var arr = this.props.remove(index)
        }
        else {
            console.log("Cannot Remove")
        }
    }


    render() {
        console.log(this.props.index)
        const property = this.props.property

        return (
            <table className="mainSaved">
                <h1 className="headingSaved">{this.props.status}</h1>
                {console.log(property)}
                {
                    property.map((property, index) =>

                        <tbody onClick={this.onRemove.bind(this, index)} style={{ backgroundColor: property.agency.brandingColors.primary }} index={index} key={index}>
                            <tr>
                                <td className="logo"><img src={property.agency.logo} /></td>
                            </tr>
                            {console.log(index)}

                            <tr>
                                <td><img src={property.mainImage} index={index} /></td>
                            </tr>

                            <tr>
                                <td className="price">{property.price}</td>
                            </tr>
                        </tbody>
                    )
                }
            </table>
        )
    }

}


