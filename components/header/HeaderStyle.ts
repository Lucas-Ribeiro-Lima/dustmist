'use client'

import styled from "styled-components"

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 80px;
    margin-right: 87px;
    margin-top: 28px;
    @media (max-width: 1440px) {
        flex-direction: column;
        justify-content: center;
        margin: 0px;
    }
`

export const Navbar = styled.div`
    ul {
        display: flex;
        padding-top: 12px;
        padding-bottom: 12px;
        flex-direction: row;
        list-style: none;
        gap: 40px;
    }
    li {
        :hover{
            text-shadow: 0px 0px 10px white;
        }
    }
    a {
        color: #fffF;
        text-decoration: none;
    }
    @media (max-width: 1440px) {
        ul {
            padding: 0px;
        }
    }
`;