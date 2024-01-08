'use client'

import { Button, Container, Form, Input, Label, SecondaryTitle, SpanError, TextArea } from '@/styles/global-styles'
import { FormEvent } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useRouter } from 'next/navigation'
import { api } from '@/lib/api'

type ContactFormData = z.infer<typeof ContactFormSchema>

const ContactFormSchema = z.object(
    {
        name: z.string().min(4, 'Please enter your name'),
        last_name: z.string().min(4, 'Please enter your last name'),
        email: z.string().email('Invalid email format'),
        phone: z.string().min(1, 'Please enter your contact number'),
        message: z.string().min(10, 'Write a brief message').max(512, 'You have exceeded the 512-character limit')
    }
);

export function ContactForm() {

    const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>({ resolver: zodResolver(ContactFormSchema) });

    const router = useRouter();

    async function handleForm({ name, last_name, email, phone, message }: ContactFormData, event: FormEvent) {
        event.preventDefault();

        try {
            const response = api.post("/api/contact", { name, last_name, email, phone, message })
            console.log(response)
            router.push('/sucess')
        } catch (error) {
            console.error(error.message);
            router.push('/error')
        }
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
