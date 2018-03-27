import React from 'react'
import './Properties.scss'



export default class Saved extends React.Component {

	constructor(props) {
		super(props)
		this.onRemove = this.onRemove.bind(this)
	}

	onRemove(index) {
		var arr = this.props.remove(index)
	}

	render() {
		const property = this.props.property

		return (
			<table className="mainSaved">
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
							<button onClick={this.onRemove.bind(this, index)}className="buttonSaved">Remove</button>
						</tbody>
					)
				}
			</table>
		)
	}
}


