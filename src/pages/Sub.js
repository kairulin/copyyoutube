import React from 'react'
import { SubPage } from './style'
import { MdOutlineSubscriptions } from 'react-icons/md'
import { HiOutlineUserCircle } from 'react-icons/hi'

import { Login } from '../components/header/style'


const Sub = () => {
    return (
        <SubPage>
            <MdOutlineSubscriptions />
            <div>
                <p style={{ fontSize: "36px" }}>別錯過新推出的影片</p><br />
                <p style={{ fontSize: "24px" }} > 登入後即可查看你最喜愛的 YouTube 頻道的最新動態</p>
            </div>

            <Login>
                <HiOutlineUserCircle />
                登入
            </Login>
        </SubPage>
    )
}

export default Sub