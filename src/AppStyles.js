import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
       
        margin: 0;
        padding: 0;
        border: 0;
        font-family: 'Share Tech Mono', monospace;
        font-weight: bold;
        
    }

    body {
        background-color: #0A0A0A;
    }

    button {
        cursor: pointer;
        transition: 0.8s;
        &:active {
            opacity: 0.8;
        }
    }
`;

export const AppContainer = styled.div``;
