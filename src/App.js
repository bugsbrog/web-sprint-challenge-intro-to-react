import React, { useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import { BASE_URL } from './constant';
import Character from './components/Character';
import styled from 'styled-components';

const StyledBackground = styled.div`
  background-size: cover;
  padding: 50px;
`

const StyledHeader = styled.h1`
  font-size: 4em;
`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [swCharacters, setSwCharacters] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get(`${BASE_URL}`)
    .then (res => {
      setSwCharacters(res.data);
    }).catch (err => {
      console.error(err);
    })
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <StyledBackground>
      <Character characters={swCharacters}/>
      </StyledBackground>
    </div>
  );
}

export default App;
