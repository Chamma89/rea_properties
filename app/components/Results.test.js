import React from 'react'
import Results from './Results'
import { mount, shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from './App'
import 'isomorphic-fetch'

configure({ adapter: new Adapter() });

describe('Results Component', () => {	
	it('Results exists within Property object', () => {
		const wrapper = shallow(<App />)
		console.log(wrapper.state())
		console.log(wrapper.instance().addProperty(1))
		expect(wrapper.state('property')).toHaveProperty('results', [])
	})

	it('Saved exists within Property object', () => {
		const wrapper = shallow(<App />)
		expect(wrapper.state('property')).toHaveProperty('saved', [])
	})
})

describe('Results Component', () => {
	it('Function add property to saved state', () => {
		const wrapper = shallow(<App name="Fouad" />)
		const sampleProperty = {
			"price": "$726,500",
			"agency": {
				"brandingColors": {
					"primary": "#ffe512"
				},
				"logo": "http://i1.au.reastatic.net/agencylogo/XRWXMT/12/20120927204448.gif"
			},
			"id": "1",
			"mainImage": "http://i2.au.reastatic.net/640x480/20bfc8668a30e8cabf045a1cd54814a9042fc715a8be683ba196898333d68cec/main.jpg"
		}

		wrapper.setState({
			property: {
				results: [sampleProperty],
				saved: []
			}
		})

		const results = wrapper.state().property.results
		const addFunction = wrapper.find('Results').prop('add')
		const index = 0

		addFunction(index)

		const expectedSaved = [results[index]]

		const actualSaved = wrapper.state().property.saved

		expect(actualSaved).toEqual(expectedSaved)
	})

	it('Function remove property from saved state', () => {
		const wrapper = shallow(<App name="Fouad" />)

		const sampleProperty = {
			"price": "$726,500",
			"agency": {
				"brandingColors": {
					"primary": "#ffe512"
				},
				"logo": "http://i1.au.reastatic.net/agencylogo/XRWXMT/12/20120927204448.gif"
			},
			"id": "1",
			"mainImage": "http://i2.au.reastatic.net/640x480/20bfc8668a30e8cabf045a1cd54814a9042fc715a8be683ba196898333d68cec/main.jpg"
		}

		wrapper.setState({
			property: {
				results: [],
				saved: [sampleProperty]
			}
		})

		const index = 0
		const results = wrapper.state().property.saved
		const removeFunction = wrapper.find('Saved').prop('remove')
		const expectedSaved = [results[index]]

		removeFunction(index)

		expect(results).toEqual([])



	})
})
