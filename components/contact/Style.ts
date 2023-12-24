'use client'

import styled, { css } from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2 {
        font-size: 48px;
        font-weight: 700;
    }

    form{
        width: 753px;
        height: 330px;
        color: #4f4f4f;
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    input{
        background-color: transparent;
        border: none;
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