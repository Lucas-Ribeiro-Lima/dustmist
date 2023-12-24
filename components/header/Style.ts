'use client'

import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 80px;
    margin-right: 87px;
    margin-top: 28px;
`

export const Title = styled.h1`
    width: 212px;
    height: 47px;
    font-size: 36px;
    font-weight: 700;
`;

export const Navbar = styled.div`
    ul {
        display: flex;
        padding-top: 12px;
        padding-bottom: 12px;
        flex-direction: row;
        gap: 40px;
        list-style: none;
    }
`;