"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

const THEME = "theme"
const LIGHT = "light"
const DARK = "dark"

export default function ThemeIcon() {
  const [theme, setTheme] = useState(() => {
    typeof window !== "undefined"
      ? localStorage.getItem(THEME) === "dark"
        ? DARK
        : LIGHT
      : LIGHT
  })

  const handleClick = () => {
    const theme = localStorage.getItem(THEME)

    if (theme === DARK) {
      localStorage.setItem(THEME, LIGHT)
      setTheme(LIGHT)
    } else {
      localStorage.setItem(THEME, DARK)
      setTheme(DARK)
    }
  }

  useEffect(() => {
    if (theme === DARK) {
      document.querySelector("body").classList.add(DARK)
    } else {
      document.querySelector("body").classList.remove(DARK)
    }
  }, [theme])

  return (
    <button className="w-12 px-2" onClick={handleClick}>
      <Image
        src={`/images/${theme === DARK ? LIGHT : DARK}-mode.svg`}
        alt={DARK}
        height={108}
        width={108}
      />
    </button>
  )
}
