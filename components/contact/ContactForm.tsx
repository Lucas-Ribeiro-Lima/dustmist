'use client'

import { Button, Container, Form, Input, Label, SecondaryTitle, SpanError, TextArea } from '@/styles/global-styles'
import { FormEvent } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useRouter } from 'next/navigation'
import axios from 'axios'

type ContactFormData = z.infer<typeof ContactFormSchema>

const ContactFormSchema = z.object(
    {
        name: z.string().min(4, 'Preencha seu nome'),
        last_name: z.string().min(4, 'Preencha seu sobrenome'),
        email: z.string().email('Formato de e-mail inválido'),
        phone: z.string().min(1, 'Preencha seu número de contato'),
        message: z.string().min(10, 'Escreva uma curta mensagem').max(512, 'Você ultrapassou o limite de 512 caracteres')
    }
)

export function ContactForm() {
    
    const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>({ resolver: zodResolver(ContactFormSchema) });
    
    const router = useRouter();

    async function handleForm({ name, last_name, email, phone, message }: ContactFormData, event: FormEvent) {
        event.preventDefault();
    
        await axios
            .post("/api/contact", { name, last_name, email, phone, message })
            .then((res) => {
                console.log({ res });
                router.push('/sucess');
            })
            .catch((error) => {
                console.error(error.message);
                router.push('/error')
                // throw new Error("Error on form submit")
            })

}
    
    return (
        <Container id='Contact'>
            <SecondaryTitle>
                Contact Me
            </SecondaryTitle>
            <Form
                onSubmit={handleSubmit(handleForm)}
                onReset={router.back}
                autoComplete='off'>
                <Container $flexRowContainer>
                    <Container>
                        <Label>
                            <Input {...register('name')} type='text' placeholder='Name'></Input>
                            {errors.name && <SpanError>{errors.name.message}</SpanError>}
                        </Label>
                    </Container>

                    <Container>
                        <Label>
                            <Input {...register('last_name')} type='text' placeholder='Last Name'></Input>
                            {errors.last_name && <SpanError>{errors.last_name.message}</SpanError>}
                        </Label>
                    </Container>
                </Container>

                <Container $flexRowContainer>

                    <Container>
                        <Label>
                            <Input {...register('email')} type='text' placeholder='Email'></Input>
                            {errors.email && <SpanError>{errors.email.message}</SpanError>}
                        </Label>
                    </Container>

                    <Container>
                        <Label>
                            <Input {...register('phone')} type='text' placeholder='Phone Number'></Input>
                            {errors.phone && <SpanError>{errors.phone.message}</SpanError>}
                        </Label>
                    </Container>

                </Container>

                <Container>
                    <Label>
                        <TextArea {...register('message')} placeholder='Message'></TextArea>
                        {errors.message && <SpanError>{errors.message.message}</SpanError>}
                    </Label>
                </Container>

                <Container $flexRowContainer>
                    <Button $primary type='submit'>Submit now</Button>
                    <Button $close type='reset'>Cancel</Button>
                </Container>

            </Form>
        </Container>
    )
}
