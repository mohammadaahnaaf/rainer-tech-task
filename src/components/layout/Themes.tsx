"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes/dist"
import { type ThemeProviderProps } from "next-themes/dist/types"

export function ThemesProvider({ children, ...props }: ThemeProviderProps) {
    return <NextThemesProvider enableSystem={true} attribute='class' {...props}>{children}</NextThemesProvider>
}
