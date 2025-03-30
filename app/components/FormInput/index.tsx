// components/FormField.tsx
'use client'

import { Input } from '@/app/components/Input'
import { FieldValues, Path, UseFormRegister } from 'react-hook-form'
import { ReactNode } from 'react'

interface FormProps<T extends FieldValues> {
  label: string
  name: Path<T>
  type?: string
  placeholder?: string
  error?: string
  register: UseFormRegister<T>
  icon?: ReactNode
  iconRight?: ReactNode
  className?: string
}

export function FormInput<T extends FieldValues>({
  label,
  name,
  type = 'text',
  placeholder,
  error,
  register,
  icon,
  iconRight,
  className
}: FormProps<T>) {
  return (
    <Input.Root className={className}>
      <Input.Label>{label}</Input.Label>
      <div className="relative">
        {icon && <Input.Icon position="left">{icon}</Input.Icon>}
        <Input.Field
          type={type}
          placeholder={placeholder}
          error={error}
          hasIconLeft={!!icon}
          {...register(name)}
        />
        {iconRight && <Input.Icon position="right">{iconRight}</Input.Icon>}
      </div>
      <Input.MessageError message={error} />
    </Input.Root>
  )
}
