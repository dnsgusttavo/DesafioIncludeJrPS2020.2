import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    height: 100%;
    background-color: ${props => {if(props.type === "dark") return `#26262E`; else if(props.type === "light") return '#ECF0F1'}}
`;