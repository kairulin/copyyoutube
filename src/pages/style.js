import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    background:#181818;
`

export const ContainerBox = styled.div`
    width:100%;
    display:grid;
    grid-template-columns:repeat(4, 1fr);
    gap:10px;
    padding:40px 50px;
    @media screen and (max-width: 1300px) {
        grid-template-columns:repeat(3, 1fr);
        
    }
    @media screen and (max-width: 880px) {
        grid-template-columns:repeat(2, 1fr);
        
    }

    @media screen and (max-width: 500px) {
        grid-template-columns:repeat(1, 1fr);
        
    }
`
export const VideoBox = styled.div`

    display:flex;
    flex-direction:column;
    gap:10px;
`

export const VideoImg = styled.div`
    max-width:360px;
    height:200px;
    background:rgb(54,54,54);
`

export const CircleAndTitle = styled.div`
    display:flex;
    gap:15px;
`
export const CircleImg = styled.div`
    border-radius:50px;
    width:36px;
    height:36px;
    background:rgb(54,54,54);
`

export const TitleAndUser = styled.div`
    display:flex;
    flex-direction:column;
`

export const Title = styled.div`
    color:#fff;
`

export const PostUser = styled.div`
    color:#aaa;
    font-size:12px;
`

export const WatchAndTime = styled.div`
    color:#aaa;
    font-size:12px;
`