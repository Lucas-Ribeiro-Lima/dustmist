'use client'

import styled from "styled-components"


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2 {
        font-size: 48px;
        font-weight: 700;
    }
`

export const Skills = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    width: 1168px;
    height: 235px;
    gap: 120px;
    font-size: 72px;
    font-weight: 700;
    background-color: #212121;
    div {
        display: flex;
        color: #4F4F4F;
        flex-direction: column;
        justify-content: center;
        span {
            color: #27AE60;
            /* text-align: center; */
            font-size: 24px;
            font-weight: 700;
        }
    }
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 350px 350px 350px;
    height: 241px;
    gap: 60px;
    
    :hover {
        border: 1px solid #000;
        span {
            background-color: #27AE60;
            width: 346px;
            height: 5px;
        }
    }

    div{
        display: flex;
        flex-direction: column;
        gap: 29.67px;
        padding-top: 34.86px;
        padding-left: 50px;
        font-size: 36px;
        font-style: normal;
        font-weight: 500;
        color: #535353;
        background-color: #212121;
    }
`