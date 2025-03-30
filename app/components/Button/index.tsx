import { ButtonHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  fullWidth?: boolean
  isLoading?: boolean
}

export function Button({
  variant = 'primary',
  fullWidth = false,
  isLoading = false,
  className,
  disabled,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      disabled={disabled || isLoading}
      className={twMerge(
        'flex h-10 items-center justify-center gap-2 rounded-lg px-4 font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-70',
        variant === 'primary' &&
          'bg-primary-500 text-white hover:bg-primary-600 disabled:hover:bg-primary-500',
        variant === 'secondary' &&
          'bg-secondary-500 text-white hover:bg-secondary-600 disabled:hover:bg-secondary-500',
        fullWidth && 'w-full',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
} 