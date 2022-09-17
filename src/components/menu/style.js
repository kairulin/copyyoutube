import styled from "styled-components";

export const MenuBox = styled.div`
    width:298px;
    height:40px;
    background:${({ theme }) => theme.bg1};
    position:absolute;
    top:50px;
    right:100px;
    border-left: ${({ theme }) => theme.borderbottom};
    border-bottom: ${({ theme }) => theme.borderbottom};
    border-right: ${({ theme }) => theme.borderbottom};
    color:${({ theme }) => theme.text};
    display:flex;
    justify-content:center;
    align-items:center;
   
`

export const Item = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    cursor: pointer;
     &:hover{
        background:${({ theme }) => theme.hover};
    }
`
