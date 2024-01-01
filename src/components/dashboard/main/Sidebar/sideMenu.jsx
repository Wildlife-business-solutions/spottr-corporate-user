import { SpottrLink } from 'GlobalStyles/spotrrStyles/style'
import React from 'react'
import { SideMenuDiv } from './style'

export default function SideMenu({icon, iconActive, text, link, setOpen, onActiveClick, isActive}) {
    return (
        <SpottrLink to={link}>
            <SideMenuDiv onClick={()=>{
                setOpen(false)
                onActiveClick(text)
                }} 
                className={isActive?'activeLink':null} >
                <img src={isActive?icon:iconActive} alt='look'/>
                <p>{text}</p>
            </SideMenuDiv>
        </SpottrLink>
    )
}
