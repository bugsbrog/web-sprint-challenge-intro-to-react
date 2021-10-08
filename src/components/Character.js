// Write your Character component here
import React, { useState } from 'react';
// import styled from 'styled-components';

const Characters = (props) => {
    const {characters} = props;

    return (
        <div>
        {characters.map(res => {
            return ( 
            <div> 
                <h1>{res.name}</h1>
                <h2>{res.birth_year}</h2>
                <h2>{res.gender}</h2>
            </div>
            )
    })}
    </div>
        )
    }

export default Characters
