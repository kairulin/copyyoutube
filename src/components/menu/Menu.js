import React,{useContext} from 'react'
import { Item, MenuBox } from './style'
import { ThemeContext } from './../../App'

const Menu = ({showMenu}) => {
  const { setTheme, theme } = useContext(ThemeContext)

  return (
    <MenuBox style={{display : showMenu ? 'flex' : 'none'}}>
        <Item isActive={theme === "dark"} onClick={() => setTheme((p) => (p === "light" ? "dark" : "light"))}>
            深色主題/淺色主題
        </Item>
    </MenuBox>
  )
}

export default Menu