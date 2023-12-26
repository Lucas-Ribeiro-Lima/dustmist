'use client'

import styled from "styled-components"

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 80px;
    margin-right: 87px;
    margin-top: 28px;
`

export const Navbar = styled.div`
    ul {
        display: flex;
        padding-top: 12px;
        padding-bottom: 12px;
        flex-direction: row;
        gap: 40px;
        list-style: none;
    }
    a {
        color: #fffF;
        text-decoration: none;
    }
`;