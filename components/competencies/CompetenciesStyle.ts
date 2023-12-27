'use client'

import styled from "styled-components"


export const CompentenciesContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 60px;
    width: 90vw;
    @media ( max-width: 1240px ) {
        flex-direction: column;
    }
`

export const Competencie = styled.div`
    display: flex;
    flex-direction: column;
    gap: 29.67px;
    width: 100%;
    height: 241px;
    background-color: #212121;
    font-size: 36px;
    font-weight: 500;
    color: #535353;
    img {
        padding-left: 50px;
        padding-top: 34px;
    }
    div {
        padding-left: 50px;
        flex-grow: 1;
    }
    span {
        /* display: none; */
        width: 100%;
        height: 5px;
        background: #27AE60;
    }
`

export const SkillsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    width: 80vw;
    height: 235px;
    gap: 120px;
    font-size: 72px;
    font-weight: 700;
    background-color: #212121;
    @media ( max-width: 1240px ) {
        flex-direction: column;
        height: fit-content;
        gap: 40px;
    }
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
export const Skills = styled.div`
    display: flex;
    flex-direction: column;
`
