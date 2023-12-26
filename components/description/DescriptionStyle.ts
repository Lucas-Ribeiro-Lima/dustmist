'use client'

import styled from "styled-components"

export const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    main{
        width: 745px;
        height: 136px;
        font-style: normal;
    }

    ul{
        display: flex;
        width: 1000px;
        justify-content: space-between;
        list-style: none;
    }

    li{
        display: block;
    }

    a{
        color: #FFFF;
        text-decoration: none;
    }
`
