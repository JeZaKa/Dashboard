import React from 'react'

const Button = ({ color, bgColor, text, borderRadius, size }) => {
  return (
    <button className={`text-${size} p-3 hover:drop-shadow-xl`} type='button' style={{ color: color, background: bgColor, borderRadius: borderRadius }}> {text}</button >
  )
}

export default Button