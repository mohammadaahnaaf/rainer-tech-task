import React from 'react'
import { Header, SideBar } from '..'

type Props = {
    children: any
}

export const Layout = (props: Props) => {

    return (
        // <ThemesProvider>
            <div className='relative h-screen'>
                <SideBar />
                <div className='dark:bg-red-700 bg-gray-200 h-screen'>
                    <Header />
                    {props.children}
                </div>
            </div>
        // </ThemesProvider>
    )
}