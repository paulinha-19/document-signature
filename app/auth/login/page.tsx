'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/app/components/Button'
import { Divider, ButtonOAuth, FormInput, FooterForm, Logo } from '@/app/components/index'
import { EnvelopeIcon, EyeIcon, EyeOffIcon, PadLockIcon } from '@/app/components/Icons/index'
import { loginFormSchema, type LoginFormData } from '@/app/schemas/auth'
import { useTogglePassword } from '@/app/hook/index'

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema),
  })

  const {
    showPassword,
    togglePassword,
  } = useTogglePassword()

  const onSubmit = async (data: LoginFormData) => {
    // Handle login logic here
    console.log(data)
  }

  return (
    <div className="min-h-screen grid place-items-center bg-gray-50 p-4">
      <div className="w-full max-w-[400px]">
        <Logo />
        <p className="text-center text-2xl text-gray-500 mb-2">
          Login
        </p>

        <div className="rounded-xl bg-white p-6 shadow-sm">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <FormInput
              label="Email"
              name="email"
              placeholder="Insira seu email"
              error={errors.email?.message}
              register={register}
              icon={<EnvelopeIcon />}
            />
            <FormInput
              label="Senha"
              name="password"
              placeholder="Insira sua senha"
              type={showPassword ? 'text' : 'password'}
              error={errors.password?.message}
              register={register}
              icon={<PadLockIcon />}
              iconRight={
                <Button
                  className="bg-transparent hover:bg-transparent text-gray-900"
                  onClick={togglePassword}
                >
                  {showPassword ? (
                    <EyeIcon />
                  ) : (
                    <EyeOffIcon />
                  )}
                </Button>
              }
            />
            <Button type="submit" fullWidth isLoading={isSubmitting}>
              Entrar
            </Button>
          </form>

          <div className="mt-6">
            <Divider text="ou continue com" />
            <ButtonOAuth />
          </div>

          <FooterForm
            message="Não tem conta?"
            linkLabel="Cadastre-se"
            linkHref="/auth/register"
          />
        </div>
      </div>
    </div>
  )
} 