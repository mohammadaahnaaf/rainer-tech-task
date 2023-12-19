import React from 'react'
import { Header, SideBar } from '..'
import { ThemesProvider } from './Themes'

type Props = {
    children: any
}

export const Layout = (props: Props) => {
    React.useEffect(() => {
        const theme = localStorage.theme

        console.log(theme)
        localStorage.setItem('theme', 'dark')
        console.log(theme)

    })
    return (
        <ThemesProvider>
            <div className='relative h-screen'>
                <SideBar />
                <div>
                <Header />
                    
                    {props.children}</div>
            </div>
        </ThemesProvider>
    )
}