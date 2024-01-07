import styled, { css } from "styled-components"

export const Container = styled.div<{
    $flexRowContainer?: boolean,
    $flexColContainer?: boolean,
    $alignself?: string,
    $gap?: number,
    $width?: number,
    $height?: number,
    $padding?: number,
    $margin?: number,
    $backgroundColor?: string,
    $hover?: boolean,
}>`
    /* display: flex; */
    /* flex-direction: column; */
    ${props => props.$flexColContainer && css`
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
    width: ${props => props.$width}%;
    margin-left: ${props => props.$margin}px;
    margin-right: ${props => props.$margin}px;
    padding: ${props => props.$padding}px;
    background-color: #212121;
    background-color: ${props => props.$backgroundColor};
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    justify-content: center;
    text-align: justify;
    align-items: center;
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
    @media ( max-width: 1240px ) {
        flex-direction: column;
        width: auto;
    }
`
export const PrimaryTitle = styled.h1`
    font-size: 42px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    color: #27ae60;
`

export const SecondaryTitle = styled.h2`
    width: fit-content;
    a{
        color: #27AE60;
    }
`

export const SubTitle = styled.span`
    color: #828282;
    margin: 0px;
    padding: 0px;
`

export const LanguageSpan = styled.span`
    color: #AF1919;
    font-weight: 600;
`

export const UnderlineSpan = styled.span`
    display: block;
    width: 100%;
    height: 5px;
    background: #27AE60;
`


