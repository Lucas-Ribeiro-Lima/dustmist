'use client'

import styled, {css} from "styled-components"

export const Container = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    margin-left: 8rem;
    margin-top: 2.5rem;
    gap: 109px;
`;

export const Apresentation = styled.div`
    h1{
        font-size: 48px;
        font-weight: 700;
    }
    span {
        color: #828282;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
    }
`;

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    h2 {
        font-size: 48px;
        font-weight: 700;
    }
    main{
        width: 745px;
        height: 136px;
        font-style: normal;
    }
    ul{
        display: flex;
        width: 1000px;
        justify-content: space-between;
        list-style: none;
    }
    li{
        display: block;
    }
    a{
        color: #FFFF;
        text-decoration: none;
    }
`


export const Button = styled.button<{ $primary?:boolean }>`
    width: 143px;
    height: 42px;
    margin-right: 4px;
    color: #FFFF;
    border: 1px solid #f2f2f2;
    background: #171717;
    ${props =>
        props.$primary && css`
        background: #27AE60;
        border: none;
        `
    }

`

export const PortraitElipse = styled.div< {$elipse1?:boolean, $elipse2?:boolean}>`
    display: flex;
    align-items: center;
    justify-content: center;

    ${
        props =>
            props.$elipse1 && css`
                width: 650px;
                height: 650px;
                border-radius: 650px;
                border: 1px solid #202020;
                background-color: rgba(30, 29, 29, 0.20);               
            `
    }
    ${
        props =>
            props.$elipse2 && css`
                width: 596.89px;
                height: 596.89px;
                border: 1px solid #4f4f4f;
                border-radius: 596.887px;
                background-color: #1E1D1D;
                overflow: hidden;
            `
    }
`