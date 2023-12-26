'use client'

import styled from "styled-components"


export const CompentenciesContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 60px;
`

export const Competencie = styled.div`
    display: flex;
    flex-direction: column;
    gap: 29.67px;
    width: 350px;
    height: 241px;
    padding-left: 50px;
    padding-top: 34.86px;
    background-color: #212121;
    font-size: 36px;
    font-weight: 500;
    color: #535353;
    :hover {
        span{
            background-color: #fff;
            width: 100px;
            height: 100px;
        }
    }
`

export const SkillsContainer = styled.div`
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
export const Skills = styled.div`
    display: flex;
    flex-direction: column;
`
