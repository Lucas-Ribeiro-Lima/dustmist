'use client'

import { LogInIcon } from "lucide-react";
import { Button, Container, Form, Title, ContainerRow } from "./style";
import { useForm } from "react-hook-form";
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/authContext";
import Feedback from "@/app/@modal/feedback/feedback";

export type LoginData = z.infer<typeof LoginSchema>

const LoginSchema = z.object({
  email: z.string().min(1, 'Preencha o e-mail').email('E-mail Inválido'),
  password: z.string().min(1, 'Preencha a senha'),
  rememberMe: z.boolean(),
})

export function Login() {

  const { signIn } = useContext(AuthContext)
  const { register, handleSubmit, formState: { errors } } = useForm<LoginData>({ resolver: zodResolver(LoginSchema) })

  const [modalOpen, setModalOpen] = useState(false)
  const [error, setError] = useState('')

  //Ensure tha component renders the same content server-side to prevent hydration mismatch
  useEffect(() => {
  }, [])

  async function handleForm({ email, password, rememberMe }: LoginData) {
    try {
      await signIn({ email, password, rememberMe })
    } catch (error) {
      console.log(error.response.data.message)
      setError(error.response.data.message)
      setModalOpen(true);
      DismissModal();
    }
  }
  
  async function DismissModal() {
    const delay = () => new Promise(resolve => setTimeout(resolve, 2000))
    await delay()
    setModalOpen(false);
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit(handleForm)}>
        <Title>Admin Page</Title>
        <label>
          E-mail
          <input {...register('email')} type="email" placeholder="E-mail" autoComplete="email"></input>
          {errors.email && <span>{errors.email.message}</span>}
        </label>
        <label>
          Password
          <input {...register('password')} type="password" placeholder="Password" autoComplete="current-password"></input>
          {errors.password && <span>{errors.password.message}</span>}
        </label>
        <ContainerRow>
          <input {...register('rememberMe')} type="checkbox"></input>
          Remember me!
        </ContainerRow>
        <Button type="submit"><LogInIcon></LogInIcon>Log-in</Button>
      </Form>
      {modalOpen && <Feedback>{error}</Feedback>}
    </Container>
  ) 
}
