
import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "md" | "lg"
}

export default function Button({
  className,
  size = "sm",
  type = "button",
  children,
  disabled,
  ...props
}: ButtonProps) {

  const baseClasses = `
    rounded-full px-4 py-2 text-sm font-medium
    bg-primary text-primary-foreground
    hover:bg-primary/90 transition-colors
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:pointer-events-none
    overflow-hidden relative flex items-center justify-center gap-2
  `

  const sizeClasses = {
    sm: "text-sm px-3 py-1",
    md: "text-lg px-4 py-2",
    lg: "text-xl px-5 py-3",
  }

  const classes = `${baseClasses} ${sizeClasses[size]} ${className || ""}`

  return (
    <button
      className={classes}
      type={type}
      disabled={disabled}
      {...props}
    >
      <span className="relative flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  )
}
