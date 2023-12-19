import React from 'react'
import { ThemeProvider } from 'next-theme'
type Props = {
    children: any
}

export const ThemesProvider = (props: Props) => {
    return (
        <ThemeProvider>{props.children}</ThemeProvider>
    )
}