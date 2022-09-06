import styled from "styled-components";

export const HeaderBox = styled.div`
    width:100%;
    height:56px;
    display:flex;
    justify-content:space-between;
    padding:0 16px;
    align-items:center;
    background:rgba(33,33,33,0.98);
`
export const LeftBox = styled.div` 
    height:100%;
    display:flex;
    align-items:center;
`

export const Menu = styled.div`
    display:flex;
    align-items:center;
    cursor: pointer;
    height:100%;
    padding: 8px;
    svg{
        color:#fff;
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
    color:#fff;
    align-self: center;
    text-align:center;
    cursor: pointer;
`

export const InputBox = styled.div`
    height:100%;
    width:33%;
    display:flex;
    align-items:center;

`
export const InputAndIcon = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    height:40px;
    width:${({hasFocus}) => (hasFocus ? 'calc(100% - 40px)' : '525.48px')};
    background:hsl(0,0%,7%);
    margin-left:${({hasFocus}) => (hasFocus ? '0px' : '40px')};
    border:${({hasFocus}) => (hasFocus ? '1px solid #1c62b9' : '1px solid hsl(0,0%,18.82%)')};
    padding:2px 6px;
`

export const InputIcon = styled.div`
    display:${({hasFocus}) => (hasFocus ? 'flex' : 'none')};
    justify-content:center;
    align-items:center;
    height:40px;
    width:40px;
    color:#fff;
    opacity: ${({hasFocus}) => (hasFocus ? '1' : '0')};
`

export const Input = styled.input`
    height:26px;
    width:100%;
    border:none;
    background:hsl(0,0%,7%);
    outline:none;
    color:white;
    &::placeholder{
        font-size:16px;
    }
`

export const Search = styled.div`
    cursor: pointer;

    width:64px;
    height:40px;
    display:flex;
    justify-content:center;
    align-items:center;
    background:hsla(0,0%,100%,0.08);
    border:hsl(0,0%,18.82%);
    svg{
        color:#fff;
        font-size:26px;
    }
`

export const RightBox = styled.div`
    width: 13%;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:flex-end;
    gap:25px;
`

export const Setting = styled.div`
    cursor: pointer;

    svg{
        color:#fff;
        font-size:20px;
    }
`

export const Login = styled.div`
    cursor: pointer;

    width:85px;
    height:36px;
    border:1px solid #3ea6ff;
    padding: 5px 11px;
    display:flex;
    align-items:center;
    gap:5px;
    color:#3ea6ff;
    svg{
        font-size:22px;
    }
`