import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        scroll-behavior: smooth;
    }
    body{
        background: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.text}; 
        font: 400 16px Montserrat, sans-serif;
    }

    div, selection, span, ul, li a{
        box-sizing:border-box;
    }  

    selection {
        background: #DDDD;
        
    }
`;