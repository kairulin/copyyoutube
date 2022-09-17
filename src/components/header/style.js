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

    display:flex;
    align-items:center;
    @media screen and (max-width: 650px) {
        width: 40%;
        display:flex;
        justify-content:end;     
    }

    @media screen and (max-width: 550px) {
        display:flex;
        justify-content:center;  
    }

    @media screen and (max-width: 450px) {
        display:flex;
        justify-content:start;  
    }
`
export const InputAndIcon = styled.div`
    display:flex;
    justify-content: end;
    align-items:center;
    height:40px;
    background:${({ hasFocus }) => (hasFocus ? 'hsl(0,0%,7%)' : 'transparent')};
    width:500px;
    border:${({ hasFocus }) => (hasFocus ? '1px solid #1c62b9' : 'none')};

    @media screen and (max-width: 920px) {
        width:400px;
    }

    @media screen and (max-width: 840px) {
        width:300px;
    }

    @media screen and (max-width: 750px) {
        width:210px;
    }

    @media screen and (max-width: 650px) {
        display:none;
  
    }
`
export const InputSite = styled.div`
    width:460px;
    height:40px;
    background:hsl(0,0%,7%);
    display:flex;
    justify-content: end;
    align-items:center;
    border:${({ hasFocus }) => (hasFocus ? 'none' : '1px solid hsl(0,0%,18.82%)')};
    border-left:${({ hasFocus }) => (hasFocus ? 'none' : '1px solid hsl(0,0%,18.82%)')};
    border-top:${({ hasFocus }) => (hasFocus ? 'inherit' : '1px solid hsl(0,0%,18.82%)')};
    border-bottom:${({ hasFocus }) => (hasFocus ? 'inherit' : '1px solid hsl(0,0%,18.82%)')};

    @media screen and (max-width: 920px) {
        width:360px;
    }
    @media screen and (max-width: 840px) {
        width:260px;
    }

    @media screen and (max-width: 750px) {
        width:170px;
    }
`


export const InputIcon = styled.div`
    display:${({ hasFocus }) => (hasFocus ? 'flex' : 'none')};

    justify-content:center;
    align-items:center;
    height:40px;
    width:40px;
    color:#fff;
    position: relative;
    left:2px;

      
`

export const Input = styled.input`
    height:26px;

    width:460px;
    border:none;
    background:hsl(0,0%,7%);
    outline:none;
    color:white;
    padding:2px 6px;

    &::placeholder{
        font-size:16px;
    }

    @media screen and (max-width: 920px) {
        width:360px;
    }
    @media screen and (max-width: 840px) {
        width:260px;
    }

    @media screen and (max-width: 750px) {
        width:170px;
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

    @media screen and (max-width: 650px) {
        background:inherit;        
    }

   
`
export const MobileInputBox = styled.div`
    display:none;
    @media screen and (max-width: 650px) {
        display: ${({mobile})=> mobile ? 'none' : 'flex'};
        width:100%;
        height:56px;        
        background:rgb(37,37,37);
        position:absolute;
        top:0;
        left:0;
        align-items:center;
        padding:0 16px 0 16px;
        gap:30px;
        @media screen and (max-width: 390px) {
            gap:5px;        
        }
    }
`
export const MobileBox = styled.div`
    display:flex;    
`



export const MobileBackIcon = styled.div`
    @media screen and (max-width: 650px) {
        svg{
        cursor: pointer;
        width:24px;
        height:24px;
        color:#fff;
        margin-right:15px;
        }
    }
   
`

export const MobileInput = styled.input`
    @media screen and (max-width: 650px) {
        height:26px;
        width:100%;
        border:none;
        background:hsl(0,0%,7%);
        outline:none;
        color:white;
        padding:2px 6px; 

        &::placeholder{
            font-size:16px;
        }
    }
`
export const MobileInputAndIcon = styled.div`
    @media screen and (max-width: 650px) {
        display:flex;
        justify-content:end;
        align-items:center;
        height:40px;    
        width:360px;
        background:${({ hasFocus }) => (hasFocus ? 'hsl(0,0%,7%)' : 'transparent')};
        border:${({ hasFocus }) => (hasFocus ? '1px solid #1c62b9' : 'none')};
        
        @media screen and (max-width: 550px) {
            width:300px;            
        }
        @media screen and (max-width: 480px) {
            width:240px;            
        }
        @media screen and (max-width: 390px) {
            width:160px;            
        }
    }
`
export const MobileInputSite = styled.div`
  @media screen and (max-width: 650px) {
    width:320px;
    height:40px;
    background:hsl(0,0%,7%);
    display:flex;
    justify-content: end;
    align-items:center;
    border:${({ hasFocus }) => (hasFocus ? 'none' : '1px solid hsl(0,0%,18.82%)')};
    border-left:${({ hasFocus }) => (hasFocus ? 'none' : '1px solid hsl(0,0%,18.82%)')};
    border-top:${({ hasFocus }) => (hasFocus ? 'inherit' : '1px solid hsl(0,0%,18.82%)')};
    border-bottom:${({ hasFocus }) => (hasFocus ? 'inherit' : '1px solid hsl(0,0%,18.82%)')};
    @media screen and (max-width: 550px) {
            width:260px;            
        }
    @media screen and (max-width: 480px) {
        width:200px;            
    }
    @media screen and (max-width: 390px) {
        width:120px;            
    }
  }
`
export const MobileInputIcon = styled.div`
    @media screen and (max-width: 650px) {
        display:${({ hasFocus }) => (hasFocus ? 'flex' : 'none')};
        justify-content:center;
        align-items:center;
        height:40px;
        width:40px;
        color:#fff;      
    } 
`

export const MobileSearch = styled.div`
    @media screen and (max-width: 650px) {
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
    white-space:nowrap;
    svg{
        font-size:22px;
    }
`