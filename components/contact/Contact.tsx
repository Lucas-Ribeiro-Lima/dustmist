'use client'

import {Button, SecondaryTitle, Container, Form, Input, SpanError} from '@/styles/global-styles'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'

type ContactFormData = z.infer<typeof ContactFormSchema>

const ContactFormSchema = z.object(
    {
        name: z.string().min(1, 'Preencha seu nome'),
        last_name: z.string().min(1, 'Preencha seu sobrenome'),
        email: z.string().email('Formato de e-mail inválido'),
        phone: z.string().min(1, 'Preencha seu número de contato'),
        message: z.string().max(256, 'Você ultrapassou o limite de 256 caracteres')
    }
)

async function handleForm ({name, last_name, email, phone, message}: ContactFormData) {
    axios.post("/api/contact", {name, last_name, email, phone, message})
}

export const Contact = () => {

    const {register, handleSubmit, formState: {errors}} = useForm<ContactFormData>({resolver: zodResolver(ContactFormSchema)});
    
    return (
        <Container id='Contact'>
            <SecondaryTitle>Get in touch</SecondaryTitle>
            <Form onSubmit={handleSubmit(handleForm)}>

                <Container $flexRowContainer>  
                    <Container>       
                    <Input {...register('name')} type='text' placeholder='Name' autoComplete='name'></Input>
                    {errors.name && <SpanError>{errors.name.message}</SpanError>}
                    </Container>

                    <Container>
                    <Input {...register('last_name')} type='text' placeholder='Last Name'></Input>
                    {errors.last_name && <SpanError>{errors.last_name.message}</SpanError>}
                    </Container>
                </Container>

                <Container $flexRowContainer>

                    <Container>
                        <Input {...register('email')} type='text' placeholder='Email' autoComplete='email'></Input>
                        {errors.email && <SpanError>{errors.email.message}</SpanError>}
                    </Container>

                    <Container>
                    <Input {...register('phone')} type='text' placeholder='Phone Number'></Input>
                    {errors.phone && <SpanError>{errors.phone.message}</SpanError>}
                    </Container>

                </Container>

                <Input $messagebox {...register('message')} type='text' placeholder='Message'></Input>
                <Button $primary type='submit'>Submit now</Button>

            </Form>
        </Container>
    )
}

export default Contact;