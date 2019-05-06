import React from 'react';
import App from './App';
import { shallow } from 'enzyme';


describe('fetchMovies', ()=> {
  let mockMovies;
  let wrapper;
  let mockData;
  let mockState;
  let mockRandomNumber;

  beforeEach(()=> {
    wrapper = shallow(<App />)
    mockData = [
      {title: "Another movie"}, {title:"Another title"}
    ]

    mockMovies = [
      {title: ''}, {title:''}
    ]
    
    mockState = {
      movies:[]
    }

    fetch = jest.fn().mockImplementation(()=> 
      Promise.resolve({
        ok: true,
        status:200,
        json: () => Promise.resolve(mockData, mockRandomNumber)
      }));
      mockRandomNumber = jest.fn()

  }) 
  it('should call fetch with the correct params ', async ()=> {
    const expected = 'https://swapi.co/api/films'
    await wrapper.instance().fetchMovies()
    expect(fetch).toHaveBeenCalledWith(expected)
  })

  it('should setState on a successful request ')
    wrapper.setState({movies: mockMovies})
    wrapper.instance().fetchMovies()
    .then(()=> {
      expect(wrapper.state('movies').toEqual(mockData))
    })
})


