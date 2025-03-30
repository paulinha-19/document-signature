import { z } from 'zod'

export const loginFormSchema = z.object({
  email: z.string().email('Insira seu email'),
  password: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres'),
})

export const registerFormSchema = z.object({
  name: z.string().min(1, 'Insira seu nome'),
  email: z.string().email('Insira seu email'),
  password: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres'),
  confirmPassword: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres'),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Senhas diferentes",
  path: ['confirmPassword'],
})

export type LoginFormData = z.infer<typeof loginFormSchema>
export type RegisterFormData = z.infer<typeof registerFormSchema> 