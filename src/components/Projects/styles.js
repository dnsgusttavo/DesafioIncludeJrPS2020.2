import styled from 'styled-components';

export const Chevron = styled.img`
    width: 5rem;
`
export const CarouselItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img{
        height: calc(100vh * 0.6);
    }

    h1{
        font: bold 1.3rem  'Roboto Condensed', sans-serif;
        color: #444444;
        margin: 10px 0;
    }
`
export const ProjectsBox = styled.main`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10vh 0;

    h1#title{
        text-align: center;
        font: bold 6rem  'Roboto Condensed', sans-serif;
        color: #444444;
    }
`