// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const StyledCharacter = styled.div`
    background-color: white;
    opacity: 65%;
    width: 50%;
    display: block;
    margin: 4em auto;
    padding: 0.6250em;
    `

const StyledName = styled.h1`
font-size: 2rem;
`
const StyledBY = styled.h2`
font-size: 1rem;
`

const StyledGender = styled.div`
font-size: 1rem;
`

const Characters = (props) => {
    const {characters} = props;

    return (
        <div>
        {characters.map(res => {
            return ( 
            <StyledCharacter>
                <StyledName>{res.name}</StyledName>
                <StyledBY>{res.birth_year}</StyledBY>
                <StyledGender>{res.gender}</StyledGender>
            </StyledCharacter>
            )
    })}
    </div>
        )
    }

export default Characters
