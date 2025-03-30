'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Divider, ButtonOAuth, FormInput, FooterForm, Logo, Button } from '@/app/components/index'
import { registerFormSchema, type RegisterFormData } from '@/app/schemas/auth'
import { useTogglePassword } from '@/app/hook/index'
import { AvatarIcon, EnvelopeIcon, EyeIcon, EyeOffIcon, PadLockIcon } from '@/app/components/Icons/index'

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema),
  })
  const {
    showPassword,
    togglePassword,
    showConfirmPassword,
    toggleConfirmPassword,
  } = useTogglePassword()

  const onSubmit = async (data: RegisterFormData) => {
    // Handle register logic here
    console.log(data)
  }

  return (
    <div className="min-h-screen grid place-items-center bg-gray-50 p-4">
      <div className="w-full max-w-[400px]">
        <Logo />
        <p className="text-center text-center text-2xl text-gray-500 mb-2">
          Cria sua conta
        </p>

        <div className="rounded-xl bg-white p-6 shadow-sm">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <FormInput
              label="Nome completo"
              name="name"
              placeholder="Insira seu nome"
              error={errors.name?.message}
              register={register}
              icon={<AvatarIcon />}
            />
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
            <FormInput
              label="Confirmar senha"
              name="confirmPassword"
              placeholder="Confirme a senha"
              type={showConfirmPassword ? 'text' : 'password'}
              error={errors.confirmPassword?.message}
              register={register}
              icon={<PadLockIcon />}
              iconRight={
                <Button
                  className="bg-transparent hover:bg-transparent text-gray-900"
                  onClick={toggleConfirmPassword}
                >
                  {showConfirmPassword ? (
                    <EyeIcon />
                  ) : (
                    <EyeOffIcon />
                  )}
                </Button>
              }
            />
            <Button type="submit" fullWidth isLoading={isSubmitting}>
              Criar conta
            </Button>
          </form>

          <div className="mt-6">
            <Divider text="ou continue com" />
            <ButtonOAuth />
          </div>

          <FooterForm
            message="Já tem uma conta?"
            linkLabel="Faça o login"
            linkHref="/auth/login"
          />
        </div>
      </div>
    </div>
  )
} 