'use client'

import styled, {css} from "styled-components"

export const Container = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    margin-left: 128px;
    margin-top: 120px;
    gap: 109px;
`;

export const Description = styled.div`
    font-size: 48px;
    font-weight: 700;
    span {
        color: #828282;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
    }
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

export const PortraitElipse = styled.div< {$elipse1?:boolean, $elipse2?:boolean}>`
`

export const Portrait = styled.image``