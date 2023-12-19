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
            <div
                // style={{ background: 'linear-gradient(0deg, #150A09 0%, #150A09 100%), #2E1619' }}
                className='min-h-screen bg-[#F9F9F9] dark:bg-gradient-to-r from-[#150A09] via-[#150A09] to-[#150A09] to-r-[#2E1619]'>
                <Header wide={openMenu} />
                <div className={`w-full transition-all duration-300 ${openMenu ? "pl-[264px]" : "pl-[96px]"}`}>
                    {props.children}
                </div>
            </div>
        </div>
    )
}