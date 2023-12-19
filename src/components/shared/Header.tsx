import { useTheme } from 'next-themes'
import React from 'react'

type Props = {}

export const Header = (props: Props) => {

    const { theme, setTheme } = useTheme()

    function handleTheme() {
        if (theme === "dark") {
            setTheme('light')
        } else {
            setTheme("dark")
        }
    }
    return (
        <header className='p-5 bg-gray-200'>
            <div className='flex justify-between items-center self-stretch'>

                Home
                <button className='text-black' onClick={handleTheme}>Dark</button>
            </div>
        </header>
    )
}