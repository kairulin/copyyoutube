import styled from "styled-components"
import { Link } from "react-router-dom";

export const MobileSidebar = styled.div`
    position: fixed;
    top: 0;
    left: -240px;
    transition:all .3s ease;
    z-index:3;
    @media screen and (max-width:1300px) {
        &.active {
            left:0;
        }
    }   
`
export const BackgroundBlack = styled.div`
    @media screen and (max-width:1300px) {
        width:100%;
        height:100%;
        background:rgba(0,0,0,0.3);
        position:fixed;
        top:0;
        left:0;
        z-index:2;
    }   
   
`
export const Top = styled.div`
    display:flex;
    align-items:center;
    padding:0 16px;
    background: ${({ theme }) => theme.bg1};
    height:56px;

`

export const Menu = styled.div`
    display:flex;
    align-items:center;
    cursor: pointer;
    height:100%;
    padding: 8px;
    svg{
        color:${({ theme }) => theme.text};
        width:24px;
        height:24px;
    }
`

export const TitleIcon = styled.div`
    height:100%;
    display:flex;
    align-items:center;
    margin-right:2px;
    svg{
        color:red;
        width:30px;
        height:26px;
    }
`

export const Title = styled.div`
    padding:18px 14px 18px 16px;
    display:flex;
    font-weight:700;
    height:100%;
    color:${({ theme }) => theme.text};
    align-self: center;
    text-align:center;
    cursor: pointer;
`


export const SidebarBox = styled.div`
    width:240px;
    height:calc(100vh - 56px);
    background: ${({ theme }) => theme.bg1};
    padding-right: 15px;  
    
`

export const ItemBox = styled.div`
    display:flex;
    flex-direction:column;

    border-bottom:1px solid rgba(255,255,255,0.1);
    &:first-child{
        padding:12px 0;
        
    }

    &:nth-child(2){
        padding:8px 0;
    }

        

`

export const Item = styled(Link)`

    display:flex;

    white-space: nowrap;
    align-items: center;
    gap:25px;
    color: ${({ theme }) => theme.text};
    height:40px;

    
    padding:0 24px ;
    cursor: pointer;

    &:hover{
        background:rgba(255,255,255,0.1);
    }

    &.active{
        background:rgba(255,255,255,0.1);
    }



   
    
`

export const ItemIcon = styled.div`
    display:flex;
    align-items: center;
    height:40px;

    svg{
        font-size:24px;
    }
`

export const ItemName = styled.div`
  display:flex;
    align-items: center;
    height:40px;
    font-size:14px;
`

