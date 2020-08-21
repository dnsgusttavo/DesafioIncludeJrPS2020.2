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

    @media (max-width: 700px){
        flex-direction: column-reverse;
        img{
            width: 50%;
        }
    }

`

export const Infos = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

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

    @media (max-width: 700px){
        h1{
            font-size: 4rem;
        }
        p{
            font-size: calc(100vw * 0.04);
            padding: calc(100vh * 0.01);
        }
    }

`