'use client'

import styled, {css} from "styled-components"

export const AboutMeContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    margin-left: 8rem;
    margin-top: 2.5rem;
    gap: 109px;
    @media ( max-width: 1240px ) {
        flex-direction: column-reverse;
        justify-content: center;
        margin: 0px;
    }
`;


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