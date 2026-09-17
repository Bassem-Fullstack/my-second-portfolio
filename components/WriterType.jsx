



"use client"

import { useTypewriter, Cursor } from "react-simple-typewriter"

export const TypewriterText = () => {

  const [text] = useTypewriter({

    words: ["Full Stack.", "Web Developer."],

    loop: true,

    delaySpeed: 800,

    deleteSpeed: 35,

    typeSpeed: 75,
  })

  return (
    <span className="font-serif italic text-primary leading-tight">
      {text}<Cursor />
    </span>
  )
}