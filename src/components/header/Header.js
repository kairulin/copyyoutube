import React, { useState } from 'react'
import { HeaderBox, Input, InputAndIcon, InputBox, InputIcon, LeftBox, Login, Menu, MobileBackIcon, MobileInput, MobileInputAndIcon, MobileInputBox, MobileInputIcon, MobileSearch, RightBox, Search, Setting, Title, TitleIcon } from './style'
import { IoLogoYoutube } from 'react-icons/io'
import { AiOutlineMenu, AiOutlineSearch,AiOutlineArrowLeft } from 'react-icons/ai'
import { HiOutlineDotsVertical,HiOutlineUserCircle } from 'react-icons/hi'


const Header = ({openSidebar}) => {

  const [focus, setFocus] = useState(false);
  const [mobilFocus, setMobilFocus] = useState(false);
  const [mobile,setMobile] = useState(false);


  return (
    <HeaderBox>
      <LeftBox>
        <Menu>
          <AiOutlineMenu onClick={openSidebar} />
        </Menu>
        <Title>
          <TitleIcon>
            <IoLogoYoutube />
          </TitleIcon>
          Copytube
        </Title>

      </LeftBox>
      <InputBox onClick={() => setMobile(!mobile)}>
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
        <Login >
          <HiOutlineUserCircle/>
          登入
        </Login>
      </RightBox>

      <MobileInputBox mobile={mobile}>
        <MobileBackIcon>
          <AiOutlineArrowLeft onClick={() => setMobile(!mobile)} />
        </MobileBackIcon>
        <MobileInputAndIcon hasFocus={mobilFocus}>
          <MobileInputIcon hasFocus={mobilFocus}>
            <AiOutlineSearch />
          </MobileInputIcon>
          <MobileInput onFocus={() => setMobilFocus(true)} onBlur={() => setMobilFocus(false)} />
        </MobileInputAndIcon>
       
        <MobileSearch>
            <AiOutlineSearch />
          </MobileSearch>
      </MobileInputBox>

    </HeaderBox>
  )
}

export default Header