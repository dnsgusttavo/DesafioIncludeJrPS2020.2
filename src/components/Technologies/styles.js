import styled from 'styled-components';

export const ToolsGrid = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 8rem;

    img{
        width: 20rem;
        margin: 0 4rem;
    }

    @media (max-width: 700px){
        grid-gap: 2rem;
        grid-template-columns: 1fr 1fr;
        img{
            width: calc(100vw * 0.3);
            margin: 0 2rem;
        }
    }
`
export const Tools = styled.main`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 10vh 0;

    h1{
        text-align: center;
        font: bold 6rem  'Roboto Condensed', sans-serif;
        color: #FFF;
    }

    @media (max-width: 700px){
        h1{
            font-size: 3rem;
        }
    }

`