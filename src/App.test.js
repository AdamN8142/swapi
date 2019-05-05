import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';


describe('fetchMovies', ()=> {
  let mockMovies;

  it('should call fetch with the correct params ', async ()=> {
    const expected = 'https://swapi.co/api/films'
    await wrapper.instance().fetchMovies()
    expect()
  })

})
