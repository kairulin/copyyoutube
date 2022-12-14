import React, { useContext,useState } from 'react'
import { Item, ItemBox, ItemIcon, ItemName, SidebarBox } from './style'
import { MdSubscriptions, MdOutlineSubscriptions, MdVideoLibrary, MdOutlineVideoLibrary, MdOutlineRestore, MdOutlineSettingsBackupRestore } from 'react-icons/md'
import {HiOutlineUserCircle} from 'react-icons/hi'
import { AiFillHome, AiOutlineHome, AiFillVideoCamera, AiOutlineVideoCamera, AiFillCompass, AiOutlineCompass } from 'react-icons/ai'
import { Login } from '../header/style'

import { ThemeContext } from './../../App'




const sidebarItem = [
    {
        items: [
            {
                icon: <AiOutlineHome />,
                fillicon: <AiFillHome />,
                to:"/",
                name: '首頁'
            },
            {
                icon: <AiOutlineCompass />,
                fillicon: <AiFillCompass />,
                to:"/",
                name: '探索'
            },
            {
                icon: <AiOutlineVideoCamera />,
                fillicon: <AiFillVideoCamera />,
                to:"/",
                name: 'Shorts'
            },
            {
                icon: <MdOutlineSubscriptions />,
                fillicon: <MdSubscriptions />,
                to:"/sub",
                name: '訂閱內容'
            },
        ]
    },
    {
        items: [
            {
                icon: < MdOutlineVideoLibrary />,
                fillicon: < MdVideoLibrary />,
                to:"/",
                name: '媒體庫'
            },
            {
                icon: <MdOutlineRestore />,
                fillicon: <MdOutlineSettingsBackupRestore />,
                to:"/",
                name: '觀看紀錄'
            },
        ]
    },
]

const Sidebar = ({toggleState}) => {
    const [idxA, setIdxA] = useState(0)
    const [idxB, setIdxB] = useState(0)

    const { theme } = useContext(ThemeContext)

    return (
        <SidebarBox open={toggleState}>
            {sidebarItem.map((itms, idex) => (
                <ItemBox key={idex} onClick={() => setIdxA(idex)} open={toggleState}>
                    {itms.items.map((itm, index) =>
                        <Item to={itm.to} key={index} onClick={() => setIdxB(index)} style={{ background: `${idxA === idex ? idxB === index ? theme=== 'light' ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.2)' : '' : ''}` }} open={toggleState}>
                            <ItemIcon>
                                {idxA === idex ? idxB === index ? itm.fillicon : itm.icon : itm.icon}
                            </ItemIcon>
                            <ItemName>
                                {itm.name}

                            </ItemName>
                        </Item>
                    )}
                </ItemBox>
            ))}
            <ItemBox style={{color: theme==='light' ? "#111" :"#fff" ,padding:"16px 24px 16px 32px",fontSize:"14px",lineHeight:"20px",fontWeight:"400",gap:"10px",display: toggleState? "none" : ""}}>
                登入帳號即可對影片表示喜歡、發布留言及訂閱頻道。
                <Login>
                <HiOutlineUserCircle/>
                    登入
                </Login>
            </ItemBox>
        </SidebarBox>
    )
}

export default Sidebar