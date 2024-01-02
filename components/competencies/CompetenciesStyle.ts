'use client'

import styled from "styled-components"


export const CompentenciesContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 60px;
    width: 90%;
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
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    font-size: 36px;
    font-weight: 600;
    color: #535353;
    img {
        padding-left: 50px;
        padding-top: 34px;
    }
    div {
        padding-left: 50px;
        padding-right: 8px;
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
    width: 80%;
    height: 235px;
    gap: 120px;
    font-size: 72px;
    font-weight: 700;
    background-color: #212121;
    border-radius: 50px;
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
