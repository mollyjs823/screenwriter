import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
    --white: #fff;
    --pink: #f72585;
    --purple: #7209b7;
    --dk-blue: #3a0ca3;
    --blue: #4361ee;
    --lt-blue: #4cc9f0;
    --lt-gray: #8e8e8e;
}
body{
    background: var(--white);
    }
`;
