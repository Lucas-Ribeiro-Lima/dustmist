'use client'

import styled from "styled-components";
import * as Pallete from '@/styles/variables'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 94vh;
`

export const ContainerRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  color: ${Pallete.GREEN_COLOR};
  font-weight: ${Pallete.MD_FONT_WEIGHT};
  font-size: ${Pallete.SM_FONT_SIZE};
  :box {
    border-radius: 100%;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  label {
    display: flex;
    flex-direction: column;
    text-align: left;
    text-indent: 4px;
  }
  input::placeholder{
    text-align: center;
  }
  input {
    height: 20px;
    border-radius: 20px;
  }
  span {
    font-size: ${Pallete.SM_FONT_SIZE};
    font-size: ${Pallete.SM_FONT_WEIGHT};
    color: ${Pallete.RED_COLOR};
  }
`

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: ${Pallete.LG_FONT_WEIGHT};
  background-color: ${Pallete.GREEN_COLOR};
  gap: 12px;
  border-radius: 20px;
  padding: 4px;
  margin-top: 20px;
  cursor: pointer;
  &:hover{
    background-color: ${Pallete.WHITE_GREEN_COLOR};
  }
`

export const Title = styled.h1`
  text-align: center;
  font-size: ${Pallete.PRIMARY_TITLE_SIZE};
  font-weight: ${Pallete.LG_FONT_WEIGHT};
  color: ${Pallete.GREEN_COLOR};
`

