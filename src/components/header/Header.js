import React, { useState } from 'react'
import { HeaderBox, Input, InputAndIcon, InputBox, InputIcon, LeftBox, Login, Menu, RightBox, Search, Setting, Title, TitleIcon } from './style'
import { IoLogoYoutube } from 'react-icons/io'
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'
import { HiOutlineDotsVertical,HiOutlineUserCircle } from 'react-icons/hi'


const Header = ({openSidebar}) => {

  const [focus, setFocus] = useState(false);


  return (
    <HeaderBox>
      <LeftBox>
        <Menu>
          <AiOutlineMenu onClick={openSidebar}/>
        </Menu>
        <Title>
          <TitleIcon>
            <IoLogoYoutube />
          </TitleIcon>
          Copytube
        </Title>

      </LeftBox>
      <InputBox>
        <InputAndIcon hasFocus={focus}>
          <InputIcon hasFocus={focus}>
            <AiOutlineSearch />
          </InputIcon>
          <Input placeholder='搜尋' onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} />
        </InputAndIcon>

        <Search>
          <AiOutlineSearch />
        </Search>
      </InputBox>
      <RightBox>
        <Setting>
          <HiOutlineDotsVertical />
        </Setting>
        <Login>
          <HiOutlineUserCircle/>
          登入
        </Login>
      </RightBox>
    </HeaderBox>
  )
}

export default Header