import React from 'react'
import { MobileMenuContainer } from './style'
import Hamburger from 'assets/svg/hamburger.svg'
import Search from 'pages/dashboard/main/dashboardHeader/searchIcon'

export default function MobileMenu({setOpen,open}) {
    return (
        <MobileMenuContainer>           
            <img onClick={()=>setOpen(!open)} src={Hamburger} alt='burger' />
            <div>
                <Search />
            </div>
        </MobileMenuContainer>
    )
}
