'use client'

import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: #333;
        color: #fff;
        font-family: 'DM Sans', sans-serif;
        font-weight: 400;
        line-height: normal;
        font-size: 18px;
    }
`

export const Container = styled.div`
    display: flex;
    justify-content: center;
    height: 100vh;
`;