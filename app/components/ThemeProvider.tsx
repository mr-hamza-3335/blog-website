'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
})

export const useTheme = () => useContext(ThemeContext)

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
    }, 5000) // Change theme every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`${theme} transition-colors duration-500`}>{children}</div>
    </ThemeContext.Provider>
  )
}

