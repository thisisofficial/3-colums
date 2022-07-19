import styled from "styled-components";

import React from 'react'

const Cont = styled.div`
    background-color: #FFFFFF;
    color: ${props=> props.bgcolor};
    font-size: 20px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    min-width: 146px;
    min-height: 50px;
    width: 60%;
    border: 2px solid #FFFFFF;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30%;
margin-bottom: 20px;
    &:hover{
        background-color: ${props=> props.bgcolor};
        color: #FFFFFF;
        cursor: pointer;
    }

    @media (max-width: 400px){
        font-size: 15px;
    }

`;

export function Button({bgcolor}) {
  return (
        <Cont bgcolor={bgcolor}>
            Learn More
        </Cont>
  )
}
