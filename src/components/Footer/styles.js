import styled from 'styled-components';

export const FooterBox = styled.footer`
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