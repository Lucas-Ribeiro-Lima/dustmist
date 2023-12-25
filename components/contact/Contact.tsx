'use client'

import {Button, SecondaryTitle, Container, Form, Input} from '@/styles/Styles'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import * as S from './ContactStyle'

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
    console.log({name, last_name, email, phone, message})
}

export const Contact = () => {

    const {register, handleSubmit, formState: {errors}} = useForm<ContactFormData>({resolver: zodResolver(ContactFormSchema)});
    
    return (
        <Container>
            <SecondaryTitle>Get in touch</SecondaryTitle>
            <Form onSubmit={handleSubmit(handleForm)}>

                <S.Div>  

                    <S.Div $column>       
                    <Input {...register('name')} type='text' placeholder='Name' autoComplete='name'></Input>
                    {errors.name && <S.spanError>{errors.name.message}</S.spanError>}
                    </S.Div>

                    <S.Div $column>
                    <Input {...register('last_name')} type='text' placeholder='Last Name'></Input>
                    {errors.last_name && <S.spanError>{errors.last_name.message}</S.spanError>}
                    </S.Div>

                </S.Div>

                <S.Div>

                    <S.Div $column>
                        <Input {...register('email')} type='text' placeholder='Email' autoComplete='email'></Input>
                        {errors.email && <S.spanError>{errors.email.message}</S.spanError>}
                    </S.Div>

                    <S.Div $column>
                    <Input {...register('phone')} type='text' placeholder='Phone Number'></Input>
                    {errors.phone && <S.spanError>{errors.phone.message}</S.spanError>}
                    </S.Div>

                </S.Div>

                <Input $messagebox {...register('message')} type='text' placeholder='Message'></Input>
                <Button $primary type='submit'>Submit now</Button>

            </Form>
        </Container>
    )
}

export default Contact;