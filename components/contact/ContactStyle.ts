'use client'

import styled, { css } from "styled-components"


export const Div = styled.div<{$column?:boolean}>`
    display: flex;
    gap: 37px;
    ${props => 
        props.$column && css`
            flex-direction: column;
            gap: 0px;
            align-items: start;
        `
    }
`

export const spanError = styled.span`
    margin-left: 20px;
    font-size: 12px;
    color: red;
`