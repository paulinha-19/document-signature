import { InputHTMLAttributes, forwardRef, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface RootProps extends InputHTMLAttributes<HTMLInputElement> {
  children: ReactNode
}

interface FieldProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  hasIconLeft?: boolean;
}

interface IconProps {
  children: ReactNode
  position?: 'left' | 'right'
}

interface LabelProps {
  children: ReactNode;
}

interface InputMessageErrorProps {
  message?: string
}

const InputRoot = forwardRef<HTMLInputElement, RootProps>(
  ({ className, children }, ref) => {
    return (
      <div className={twMerge('flex flex-col gap-1.5 w-full', className)} ref={ref}>
        {children}
      </div>
    )
  }
)
InputRoot.displayName = 'Input'

const InputField = forwardRef<HTMLInputElement, FieldProps>(
  ({ className, error, hasIconLeft = true, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={twMerge(
          'w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm text-gray-900 placeholder:text-gray-500 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500',
          error && 'border-red-500 focus:border-red-500 focus:ring-red-500',
          hasIconLeft ? "pl-10" : "pl-3"
        )}
        {...props}
      />
    )
  }
)
InputField.displayName = 'Input.Field'

function InputIcon({ children, position = 'left' }: IconProps) {
  return (
    <div
      className={twMerge(
        "absolute inset-y-0 flex items-center text-gray-500",
        position === 'left' ? 'left-0 pl-3.5 pointer-events-none' : 'right-0'
      )}
    >
      {children}
    </div>
  )
}
InputIcon.displayName = 'Input.Icon'

function InputLabel({ children }: LabelProps) {
  return (
    <label className="text-sm font-medium text-gray-700">
      {children}
    </label>
  )
}
InputLabel.displayName = 'Input.Label'


function InputMessageError({ message }: InputMessageErrorProps) {
  if (!message) return null
  return (
    <span className="text-sm text-red-500">{message}</span>
  )
}
InputMessageError.displayName = 'Input.MessageError'

export const Input = {
  Root: InputRoot,
  Field: InputField,
  Icon: InputIcon,
  Label: InputLabel,
  MessageError: InputMessageError
} 