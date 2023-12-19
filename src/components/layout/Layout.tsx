import React from 'react'
import { Header, SideBar } from '..'

type Props = {
    children: any
}

export const Layout = (props: Props) => {

    const [openMenu, setOpenMenu] = React.useState<boolean>(false)

    return (
        <div className='relative h-screen w-full'>
            <SideBar openMenu={openMenu} setOpenMenu={setOpenMenu} />
            <div className='bg-gradient-to-r from-rose-900 via-rose-900 to-rose-900 to-r-[#2E1619] min-h-screen'>
                <Header wide={openMenu} />
                <div className={`w-full transition-all duration-300 ${openMenu ? "pl-[264px]" : "pl-[96px]"}`}>
                    {props.children}
                </div>
            </div>
        </div>
    )
}