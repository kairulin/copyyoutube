import styled from "styled-components"

export const SidebarBox = styled.div`
    width:${({ open }) => open ? "72px" : "240px"};
    height:calc(100vh - 56px);
    background:rgba(33,33,33,0.98);
    padding-right: ${({ open }) => open ? "" : "15px"};

    @media screen and (max-width: 1300px) {
        width:72px;
        padding-right:0;
    }
    @media screen and (max-width: 800px) {
        display:none;
        
    }
`

export const ItemBox = styled.div`
    display:flex;
    flex-direction:column;

    border-bottom: ${({ open }) => open ? "none" : "1px solid rgba(255,255,255,0.1)"};
    &:first-child{
        padding:${({ open }) => open ? "" : "12px 0"};
        
    }

    &:nth-child(2){
        padding:${({ open }) => open ? "" : "8px 0"};
    }

    @media screen and (max-width: 1300px) {
        border-bottom:none;

        &:first-child{
            padding:0;        
        }

        &:nth-child(2){
            padding:0;
        }

        &:last-child{
            display:none;
        }
    }

`

export const Item = styled.div`

    display:flex;
    flex-direction:${({ open }) => open ? "column" : ""};
    white-space: nowrap;
    align-items: center;
    gap:${({ open }) => open ? "" : "25px"};
    color: #fff;
    height:${({ open }) => open ? "74px" : "40px"};

    
    padding:${({ open }) => open ? "16px 0 14px" : "0 24px"} ;
    cursor: pointer;

    &:hover{
        background:rgba(255,255,255,0.1);
    }

    &.active{
        background:rgba(255,255,255,0.1);
    }    

    @media screen and (max-width: 1300px) {
        flex-direction:column;
        gap:0;
        height:74px;
        padding:16px 0 14px;
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

