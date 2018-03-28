import React from 'react'
import Results from './Results'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() });

describe('Results Component', () => {
	it('copies a properties info into the saved component', () => {
		const wrapper =  shallow(<App/>)
		const addState = wrapper.state().addProperty
		expect(addState).toEqual(0)
	})

	it('Property data state exists', () => {
		const wrapper = shallow(<App />)
		expect(wrapper.state('results')).to.exist
	})
})

