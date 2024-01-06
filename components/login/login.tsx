'use client'

import { LogInIcon } from "lucide-react";
import { Button, Container, Form, Title, ContainerRow } from "./style";
import { useForm } from "react-hook-form";
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";

export type LoginData = z.infer<typeof LoginSchema>

const LoginSchema = z.object({
  email: z.string().min(1, 'Preencha o e-mail').email('E-mail Inválido'),
  password: z.string().min(1, 'Preencha a senha'),
  rememberMe: z.boolean(),
})

export function Login() {

  const { register, handleSubmit, formState: { errors } } = useForm<LoginData>({ resolver: zodResolver(LoginSchema) })

  async function handleLogin({ email, password, rememberMe }: LoginData) {
    console.log(email, password, rememberMe)
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit(handleLogin)}>
        <Title>Admin Page</Title>
        <label>
          E-mail
          <input {...register('email')} placeholder="E-mail"></input>
          {errors.email && <span>{errors.email.message}</span>}
        </label>
        <label>
          Password
          <input {...register('password')} placeholder="Password"></input>
          {errors.password && <span>{errors.password.message}</span>}
        </label>
        <ContainerRow>
          <input {...register('rememberMe')} type="checkbox"></input>
          Remember me!
        </ContainerRow>
        <Button type="submit"><LogInIcon></LogInIcon>Log-in</Button>
      </Form>
    </Container>
  )
}