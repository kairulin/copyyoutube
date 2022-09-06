import React, { useState } from 'react'
import Header from '../components/header/Header'
import MSidebar from '../components/mobile/sidebar/MSidebar';
import Sidebar from '../components/sidebar/Sidebar'
import { CircleAndTitle, CircleImg, Container, ContainerBox, PostUser, Title, TitleAndUser, VideoBox, VideoImg, WatchAndTime } from './style';

const post = [
  {
    title: "標題標題",
    user: "使用者",
    watch: 1,
    time: 1
  },
  {
    title: "標題標題",
    user: "使用者",
    watch: 1,
    time: 2
  },
  {
    title: "標題標題",
    user: "使用者",
    watch: 1,
    time: 3
  },
  {
    title: "標題標題",
    user: "使用者",
    watch: 1,
    time: 4
  },
  {
    title: "標題標題",
    user: "使用者",
    watch: 1,
    time: 5
  },
  {
    title: "標題標題",
    user: "使用者",
    watch: 1,
    time: 6
  }, {
    title: "標題標題",
    user: "使用者",
    watch: 1,
    time: 7
  }, {
    title: "標題標題",
    user: "使用者",
    watch: 1,
    time: 8
  },
]


const Main = () => {

  const [toggle, setToggle] = useState(false);

  const sidebarBtn = () => {
    setToggle(!toggle)
  }

  return (
    <>
      <Header openSidebar={sidebarBtn} />
      <Container>
        <Sidebar toggleState={toggle} />
        <MSidebar openSidebar={sidebarBtn} toggleState={toggle} />

        <ContainerBox>
          {post.map((item, index) => (
            <VideoBox key={index}>
              <VideoImg></VideoImg>
              <CircleAndTitle>
                <CircleImg></CircleImg>
                <TitleAndUser>
                  <Title>{item.title}</Title>
                  <PostUser>{item.user}</PostUser>
                  <WatchAndTime>觀看次數：{item.watch} 次 • {item.time} 分鐘前</WatchAndTime>
                </TitleAndUser>
              </CircleAndTitle>
            </VideoBox>
          ))}



        </ContainerBox>
      </Container>



    </>
  )
}

export default Main