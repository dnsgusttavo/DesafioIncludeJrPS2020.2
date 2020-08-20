import styled from 'styled-components';

export const AboutBox = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 0 10%;

    img{
        width: 100%;
        border-radius: 4rem;
    }

`

export const Infos = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    animation: swipe-up 1s;
    h1{
        font: bold 6rem  'Roboto Condensed', sans-serif;
        color: #444444;
    }

    p{
        font: normal 2.5rem 'Roboto Condensed', sans-serif;
        color: #1D1D1D;
        padding: 4rem;
        text-align: justify;
    }

`