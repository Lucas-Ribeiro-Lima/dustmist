'use client'

import {Button, SecondaryTitle, Container, Form, Input, SpanError, TextArea} from '@/styles/global-styles'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { FormEvent } from 'react'
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

async function handleForm ({name, last_name, email, phone, message}: ContactFormData, event: FormEvent) {
    event.preventDefault();
    // console.log(name, last_name, email, phone, message);
    await axios.post("/api/contact", { name, last_name, email, phone, message });
}

export const Contact = () => {

    const {register, handleSubmit, formState: {errors}} = useForm<ContactFormData>({resolver: zodResolver(ContactFormSchema)});
    
    return (
        <Container id='Contact'>
            <SecondaryTitle>Get in touch</SecondaryTitle>
            <Form onSubmit={handleSubmit(handleForm)} autoComplete='off'>

                <Container $flexRowContainer>  
                    <Container>       
                        <label>
                            <Input {...register('name')} type='text' placeholder='Name'></Input>
                            {errors.name && <SpanError>{errors.name.message}</SpanError>}
                        </label>
                    </Container>

                    <Container>
                        <label>
                            <Input {...register('last_name')} type='text' placeholder='Last Name'></Input>
                            {errors.last_name && <SpanError>{errors.last_name.message}</SpanError>}
                        </label>
                    </Container>
                </Container>

                <Container $flexRowContainer>

                    <Container>
                        <label>
                            <Input {...register('email')} type='text' placeholder='Email'></Input>
                            {errors.email && <SpanError>{errors.email.message}</SpanError>}
                        </label>
                    </Container>

                    <Container>
                        <label>
                            <Input {...register('phone')} type='text' placeholder='Phone Number'></Input>
                            {errors.phone && <SpanError>{errors.phone.message}</SpanError>}
                        </label>
                    </Container>

                </Container>

                <Container>
                    <label>
                        <TextArea {...register('message')} placeholder='Message'></TextArea>
                        {errors.message && <SpanError>{errors.message.message}</SpanError>}
                    </label>
                </Container>

                <Button $primary type='submit'>Submit now</Button>

            </Form>
        </Container>
    )
}

export default Contact;