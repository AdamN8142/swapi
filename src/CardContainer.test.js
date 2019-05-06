import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('CardContainer', ()=> {
  let wrapper;
  beforeEach(()=> {
    wrapper = shallow(<CardContainer />)
  })

  it('should match snapshot', ()=> {
    expect(wrapper).toMatchSnapshot();
  })
})