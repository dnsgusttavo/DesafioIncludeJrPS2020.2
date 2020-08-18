import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    height: 100%;
    background-color: ${props => {if(props.type === "dark") return `#26262E`; else if(props.type === "light") return '#ECF0F1'}}
`;

export const Header = styled.header`
    width: 100%;
    min-width: 370px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 5%;
    
    img{
        width: 20rem;
    }

    ul{
        display: flex;
        flex-direction: row;
    }
    li{
        list-style: none;
        padding: 0 1rem;
    }
    li a{
        font: normal 2rem 'Roboto Condensed', sans-serif;
        color: #FFF;
        text-decoration: none;
        transition: 200ms;
    }
    li a:hover{
        padding-bottom: 5px;
        border-bottom: 0.2rem solid #37B948;
        cursor: pointer
    }

    @media (max-width: 700px){
        flex-direction: column;

        ul{
            margin-top: 2rem;
        }

        li a{
        transition: font 0ms;
        font-size: calc(100vw * 0.04)
        }
    }
`;

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding-bottom: 87px;
    h1{ 
        display: flex;
        font: normal 6rem 'Roboto Condensed', sans-serif;
        color: #FFF;
    }

    h1 p{
        color: #37B948;
    }

    a{
        text-decoration: none;
        color: #fff;
        font: bold 20pt 'Roboto Condensed', sans-serif;
        padding: 20px;
        border-width: 3px;
        border-style: solid;
        border-color: #37b948;
        margin-top: 5vh;
        transition: background 400ms;  
    }

    a:hover{
        background-color: #37b948;
    }

    @media (max-width: 700px){
        h1{
        font-size: calc(100vw * 0.065)
        }

        a{
            font-size: calc(100vw * 0.05)
        }
    }
`

export const Footer = styled.footer`
    width: '100%';
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    background-color: #26262E;
    padding: 2rem 5%;

    img{
        width: 20rem;
    }

    p{
        font: normal 2rem 'Roboto Condensed', sans-serif;
        color: #FFF;
    }

    ul{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    ul li {
        padding: 1rem;
        list-style: none;
    }

    ul li a img{
        width: 6rem;
    }
`;

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

export const Projects = styled.main`
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

export const ToolsGrid = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 8rem;

    img{
        width: 20rem;
        margin: 0 4rem;
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
`