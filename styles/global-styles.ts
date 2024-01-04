'use client'


import styled, {css, createGlobalStyle} from "styled-components"
import * as Pallete from './variables'

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'DM Sans', sans-serif;
        font-weight: ${Pallete.SM_FONT_WEIGHT};
        font-size: ${Pallete.MD_FONT_SIZE};
        color: ${Pallete.WHITE_COLOR};
        background-color: ${Pallete.BLACK_COLOR};
        line-height: normal;
    }
`

export const GlobalContainer = styled.div`
    display: flex;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-color: ${Pallete.GRAY_COLOR};
    padding: 20px;
    ::selection{
        background-color: #27AE60;
        color: #FFFF;
    }  
    @media ( max-width: 1240px ) {
        padding: 0px;            
    }
`

export const Layout = styled.div`
    width: 75%;
    background-color: ${Pallete.BLACK_COLOR};
    border-radius: 32px;
    /* box-shadow: 0px 0px 4px ${Pallete.GREEN_COLOR}; */
    @media ( max-width: 1240px ) {
        width: 100vw;   
        border-radius: 0px;         
    }
`

export const Container = styled.div<{$flexRowContainer?:boolean, $BackgroundContainer?: string, $textColor?: string, $gapDistance?: number}>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${props => props.$gapDistance}px;
    color: ${props => props.$textColor};
    background-color: ${props => props.$BackgroundContainer};
    ${props => props.$flexRowContainer && 
        css`
            flex-direction: row; 
            gap: 20px; 
            align-items: start;
            @media ( max-width: 1240px ) {
                flex-direction: column;             
             }
        `}
    a {
        text-decoration: none;
        color: inherit;
    }
`

export const ContainerModal = styled.dialog`
    display: flex;
    justify-content: center;
    color: ${Pallete.WHITE_COLOR};
    /* box-shadow: 0px 0px 10px ${Pallete.GREEN_COLOR}; */
    background-color: #333;
    width: 800px;
    height: fit-content;
    border: none;
    border-radius: 36px;
    padding: 20px;
    @media ( max-width: 1240px ) {
        width: 100%;
        height: 100%;
        border-radius: 0px;
    }    
`
export const ModalBackDrop = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    filter: blur(50px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
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
    text-decoration: none;
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
    width: 203px;
    height: 52px;
    margin-right: 4px;
    color: #FFFF;
    border: 1px solid #f2f2f2;
    background: ${Pallete.BLACK_COLOR};
    border-radius: 24px;
    font-weight: ${Pallete.LG_FONT_WEIGHT};
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
        color: ${Pallete.WHITE_COLOR};
        border: none;
        `
    }
    a{
        text-decoration: none;
        color: ${Pallete.WHITE_COLOR};
    }
`

// export const CloseButton = styled.button`
//     position: relative;
//     left: 12rem;
//     width: 243px;
//     height: 82px;
//     margin-right: 4px;
//     color: ${Pallete.RED_COLOR};
//     border: none;
//     border-radius: 24px;
//     background: transparent;
//     cursor: pointer;
// `

export const BigButton = styled.button`
    width: 343px;
    height: 82px;
    color: #FFFF;
    margin: 40px;
    border: none;
    border-radius: 24px;
    font-size: ${Pallete.SECONDARY_TITLE_SIZE};
    font-weight: ${Pallete.LG_FONT_WEIGHT};
    background: ${Pallete.GREEN_COLOR};
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

export const LoadingTitle = styled.h1<{$marginBottom?:number}>`
    font-size: ${Pallete.PRIMARY_TITLE_SIZE};
    font-weight: ${Pallete.LG_FONT_WEIGHT};
    color: ${Pallete.GREEN_COLOR};
    margin-bottom: ${props => props.$marginBottom}px;
    @media ( max-width: 1240px ) {
        font-size: 36px;                
    }
`

export const ErrorTitle = styled.h1<{$marginBottom?:number}>`
    font-size: ${Pallete.PRIMARY_TITLE_SIZE};
    font-weight: ${Pallete.LG_FONT_WEIGHT};
    color: ${Pallete.RED_COLOR};
    margin-bottom: ${props => props.$marginBottom}px;
    @media ( max-width: 1240px ) {
        font-size: 36px;                
    }
`

export const SpanError = styled.span`
    align-self: self-start;
    margin-left: 20px;
    font-size: ${Pallete.SM_FONT_SIZE};
    color: ${Pallete.RED_COLOR};
`

export const Label = styled.label`
    display: flex;
    flex-direction: column;
`