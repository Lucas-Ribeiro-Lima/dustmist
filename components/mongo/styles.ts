'use client'

import styled from "styled-components";
import * as Pallete from '@/styles/variables'

export const Title = styled.h1`
    font-size: ${Pallete.SECONDARY_TITLE_SIZE};
    color: ${Pallete.GREEN_COLOR};
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 100%;
    height: 90vh;
    overflow-y: auto;
`

export const ContainerFrame = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 80%;
    background-color: #212121;
    border-radius: 24px;
    margin: 24px;
    padding: 24px;
    gap: 4px;            
    @media ( max-width: 1240px ) {
        flex-direction: column;
        width: 80%;
    }
`
export const Field = styled.div`
`

export const FieldSpan = styled.span`
    color: ${Pallete.GREEN_COLOR};
    font-weight: 700;
`