import styled from 'styled-components';

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
