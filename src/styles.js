import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    height: 100%;
    background-color: ${props => {if(props.type === "dark") return `#26262E`; else if(props.type === "light") return '#ECF0F1'}}
`;

export const Header = styled.header`
    width: 100%;
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
        transition: 200ms
    }
    li a:hover{
        padding-bottom: 5px;
        border-bottom: 0.2rem solid #37B948;
        cursor: pointer
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
        transition: 400ms;
    }

    a:hover{
        background-color: #37b948;
    }
`