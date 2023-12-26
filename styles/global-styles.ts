'use client'

import styled, {css, createGlobalStyle} from "styled-components"

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

export const GlobalContainer = styled.div`
    display: flex;
    justify-content: center;
`

export const Layout = styled.div`
    display: flex;
    gap: 40px;
    width: 1440px;
    height: 100%;
    background-color: #171717;
    flex-direction: column;
    border-radius: 20px;
`;

export const Container = styled.div<{$flexRowContainer?:boolean}>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${props => props.$flexRowContainer && 
        css`
            flex-direction: row; 
            gap: 0px; 
            align-items: start;
        `}
`

export const MainTitle = styled.h1`
    width: 212px;
    height: 47px;
    font-size: 36px;
    font-weight: 700;
`

export const PrimaryTitle = styled.h1<{$marginBottom?:number}>`
    font-size: 48px;
    font-weight: 700;
    margin-bottom: ${props => props.$marginBottom}px;
`

export const SecondaryTitle = styled.h2`
    font-size: 48px;
    font-weight: 700;
`

export const SubTitle = styled.div`
    margin-bottom: 47px;
    color: #828282;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
`;

export const Button = styled.button<{ $primary?:boolean }>`
    width: 143px;
    height: 42px;
    margin-right: 4px;
    color: #FFFF;
    border: 1px solid #f2f2f2;
    background: #171717;
    cursor: pointer;
    ${props =>
        props.$primary && css`
        background: #27AE60;
        border: none;
        `
    }
    a{
        text-decoration: none;
        color: #FFFF;
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 753px;
    height: 330px;
    color: #4f4f4f;
`

export const Input = styled.input<{$messagebox?:boolean}>`
    width: 358px;
    margin: 20px;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #4f4f4f;
    height: max-content;
    color: #FFFF;
    ${props => 
        props.$messagebox && css`
            border: 1px solid #4f4f4f;
            width: 750px;
            height: 109px;
        `
    }
`
export const SpanError = styled.span`
    margin-left: 20px;
    font-size: 12px;
    color: red;
`