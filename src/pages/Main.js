import React, { useState } from 'react'
import Header from '../components/header/Header'
import Menu from '../components/menu/Menu';
import MSidebar from '../components/mobile/sidebar/MSidebar';
import Sidebar from '../components/sidebar/Sidebar'
import Home from './Home';
import {  Container} from './style';

import { Routes, Route } from 'react-router-dom'
import Sub  from './Sub';



const Main = () => {

  const [toggle, setToggle] = useState(false);

  const sidebarBtn = () => {
    setToggle(!toggle)
  }

  const [menu,setMenu] = useState(false);
  const menuBtn = () => {
    setMenu(!menu)
  }
  return (
    <>
      <Header openSidebar={sidebarBtn} openMenu={menuBtn}/>
      <Menu  showMenu={menu}/>
      <Container>
        <Sidebar toggleState={toggle} />
        <MSidebar openSidebar={sidebarBtn} toggleState={toggle} />


      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/sub" element={<Sub />}/>
      </Routes>
      </Container>



    </>
  )
}

export default Main