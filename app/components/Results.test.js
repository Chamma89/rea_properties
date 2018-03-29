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
	it('Function Remove property from saved state', () => {
		const Component = shallow(<App name="Fouad" />)
	})
})

