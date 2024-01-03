import styled, { css } from "styled-components"

export const Container = styled.div<{
        $flexRowContainer?:boolean,
        $flexColContainer?:boolean,
        $alignself?: string,
        $gap?: number,
        $width?: number,
        $height?: number,
        $padding?: number,
        $margin?: number,
        $backgroundColor?: string,
    }>`
    /* display: flex; */
    /* flex-direction: column; */
    ${props => props.$flexRowContainer && css`
        display: flex;
        flex-direction: column;
    `}
    ${props => props.$flexRowContainer && css`
        display: flex;
        flex-direction: row;
    `}
    color: #FFFF;
    gap: ${props => props.$gap}px;
    height: ${props => props.$height}vh;
    width: ${props => props.$width};
    background-color: #333;
    background-color: ${props => props.$backgroundColor};
    border-radius: 24px;
    justify-content: center;
    margin: ${props => props.$margin}px;
    padding: ${props => props.$padding}px;
    align-items: center;
    align-self: ${props => props.$alignself};
    overflow-y: auto;
    ::-webkit-scrollbar{
        display: none;
    }
    a {
        color: #FFFF;
        text-decoration: none;
    }
    img {
        border-radius: 100%;
    }
`
export const PrimaryTitle = styled.h1`
    font-size: 42px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    a {
        color: #27AE60;
    }
    :hover a{
        color: 4ADF89;
    }
`

export const SecondaryTitle = styled.h2`
    width: fit-content;
    a{
        color: #27AE60;
    }
`

export const SubTitle = styled.span`
    font-size: 12px;
    color: #828282;
    margin: 0px;
    padding: 0px;
`