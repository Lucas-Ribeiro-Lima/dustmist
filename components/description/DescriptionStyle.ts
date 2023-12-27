'use client'

import styled from "styled-components"

export const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    main{
        width: 40vw;
        font-style: normal;
        margin-bottom: 44px;
        @media ( max-width: 1240px ) {
            width: 90vw;
            text-align: justify                
        }
    }

    ul{
        display: flex;
        justify-content: center;
        width: 70vw;
        gap: 20%;
        list-style: none;
        @media ( max-width: 1240px ) {
            flex-direction: column;
        }
    }

    li{
        display: block;
    }

    a{
        color: #FFFF;
        text-decoration: none;
    }  
`
