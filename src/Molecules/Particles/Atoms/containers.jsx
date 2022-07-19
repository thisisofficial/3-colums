import styled from 'styled-components';

export const Cont = styled.div`
    width: 36%;
    margin-left: ${props=> props.index == 1? "0%": "-3%"};
    height: 100%;
    background-color: ${props=> props.bgcolor};
    color: #FFFFFF;
    justify-content: center;
    align-items: center;
    z-index: ${props=> props.index};
    border-radius: 8px;
    display: flex;
    @media (max-width: 400px){
        width: 100%;
        height: 450px;
        margin-top: -4px;
        margin-left:0;
        justify-content: center;
    }
    `;

export const InnerCont = styled.div`
    height: 100%;
    width: 60%;
    justify-content: center;
    align-items: left;
    display: flex;
    flex-direction: column;
    @media (max-width: 400px){
        justify-content: center;
        width:80%;
    }

`;

export const AppCont = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    display: flex;

    @media (max-width: 400px){
        display: block;
        overflow-y: scrollable;
        height: auto;
    }

    `;