// components/layout/ThemeProvider.tsx
'use client' // next-themes uses React Context + browser APIs (localStorage), so it must run client side

import {ThemeProvider as NextThemesProvider} from 'next-themes'
import {ReactNode} from 'react'

export function ThemeProvider({children}: {children: ReactNode}) {
    return (
        <NextThemesProvider attribute="class" defaultTheme="light" enableSystem>
            {children}
        </NextThemesProvider>
    )
}