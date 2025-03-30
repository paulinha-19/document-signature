import { z } from 'zod'

export const loginFormSchema = z.object({
  email: z.string().email('Insira seu email'),
  password: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres'),
})

export type LoginFormData = z.infer<typeof loginFormSchema>
