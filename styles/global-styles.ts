'use client'


import styled, {css, createGlobalStyle} from "styled-components"
import * as Pallete from './variables'

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'DM Sans', sans-serif;
        font-weight: ${Pallete.SM_FONT_WEIGHT};
        font-size: ${Pallete.MD_FONT_SIZE};
        color: ${Pallete.WHITE_COLOR};
        background-color: ${Pallete.GRAY_COLOR};
        line-height: normal;
    }
`

export const GlobalContainer = styled.div`
    display: flex;
    overflow: hidden;
    ::selection{
        background-color: #27AE60;
        color: #FFFF;
    }  

`

export const Layout = styled.div`
    display: flex;
    gap: 40px;
    width: 100%;
    background-color: ${Pallete.BLACK_COLOR};
    flex-direction: column;
    border-radius: 20px;
`;

export const Container = styled.div<{$flexRowContainer?:boolean, $BackgroundContainer?: string}>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.$BackgroundContainer};
    ${props => props.$flexRowContainer && 
        css`
            flex-direction: row; 
            gap: 0px; 
            align-items: start;
            @media ( max-width: 1240px ) {
                flex-direction: column;             
             }
        `}
`

export const ContainerModal = styled.div`
    position: fixed;
    top: 10%;
    background-color: #333;
    height: fit-content;
    width: 50%;
    border-radius: 36px;
    padding: 20px;
    @media ( max-width: 1240px ) {
        width: 100vw;
        height: 100vh;
    }    
`

export const MainTitle = styled.h1`
    width: 212px;
    height: 47px;
    font-size: ${Pallete.MAIN_TITLE_SIZE};
    font-weight: 700;
`

export const PrimaryTitle = styled.h1<{$marginBottom?:number}>`
    font-size: ${Pallete.PRIMARY_TITLE_SIZE};
    font-weight: ${Pallete.LG_FONT_WEIGHT};
    margin-bottom: ${props => props.$marginBottom}px;
    @media ( max-width: 1240px ) {
        font-size: 36px;                
    }
`

export const SecondaryTitle = styled.h2`
    font-size: ${Pallete.SECONDARY_TITLE_SIZE};
    font-weight: ${Pallete.LG_FONT_WEIGHT};
        @media ( max-width: 1240px ) {
        font-size: 36px;                
    }
`

export const SubTitle = styled.div`
    margin-bottom: 47px;
    color: ${Pallete.SUBTITLE_COLOR};
    font-size: ${Pallete.MD_FONT_SIZE};
    font-style: normal;
    font-weight: ${Pallete.MD_FONT_WEIGHT};
`;

export const Button = styled.button<{ $primary?:boolean, $close?: boolean }>`
    width: 143px;
    height: 42px;
    margin-right: 4px;
    color: #FFFF;
    border: 1px solid #f2f2f2;
    background: ${Pallete.BLACK_COLOR};
    cursor: pointer;
    ${props =>
        props.$primary && css`
        background: ${Pallete.GREEN_COLOR};
        border: none;
        `
    }
    ${props =>
        props.$close && css `
        background: ${Pallete.RED_COLOR};
        color: ${Pallete.BLACK_COLOR};
        border: none;
        `
    }
    a{
        text-decoration: none;
        color: ${Pallete.WHITE_COLOR};
    }
`

export const CloseButton = styled.button`
    position: relative;
    left: 12rem;
    width: 243px;
    height: 82px;
    margin-right: 4px;
    color: ${Pallete.RED_COLOR};
    border: none;
    background: transparent;
    cursor: pointer;
`

export const BigButton = styled.button`
    width: 343px;
    height: 82px;
    color: #FFFF;
    margin-bottom: 40px;
    border: none;
    border-radius: 24px;
    font-size: ${Pallete.MD_FONT_SIZE};
    font-weight: ${Pallete.MD_FONT_WEIGHT};
    background: ${Pallete.GREEN_COLOR};
    :hover{
        background-color: #17502f;
    }
    cursor: pointer;
    a{
        text-decoration: none;
        color: ${Pallete.WHITE_COLOR};
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 753px;
    height: 425px;
    @media ( max-width: 1240px ) {

    }
`

export const Input = styled.input`
    width: 358px;
    margin: 20px;
    margin-bottom: 0px;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #4f4f4f;
    height: max-content;
    color: ${Pallete.WHITE_COLOR};

`

export const TextArea = styled.textarea`
    font-family: 'DM Sans', sans-serif;
    background-color: transparent;
    color: ${Pallete.WHITE_COLOR};;
    margin: 20px;
    margin-bottom: 0px;
    border: 1px solid #4f4f4f;
    width: 750px;
    height: 109px;
    overflow-wrap: break-word;
    resize: none;
    @media ( max-width: 1240px ) {
        width: 90vw;             
    }
`

export const SpanError = styled.span`
    align-self: self-start;
    margin-left: 20px;
    font-size: ${Pallete.SM_FONT_SIZE};
    color: ${Pallete.RED_COLOR};
`