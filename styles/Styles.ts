'use client'

import styled, {css} from "styled-components"

export const Container = styled.div<{$messagebox?:boolean}>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
    ${props =>
        props.$primary && css`
        background: #27AE60;
        border: none;
        `
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
}
`