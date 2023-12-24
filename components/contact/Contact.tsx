import {Button, SecondaryTitle, Container, Form, Input} from '@/styles/Styles'
import * as S from './ContactStyle'

export const Contact = () => {
    return (
        <Container>
            <SecondaryTitle>Get in touch</SecondaryTitle>
            <Form>
                <S.Div1>           
                    <Input type='text' placeholder='Name' autoComplete='name'></Input>
                    <Input type='text' placeholder='Last Name'></Input>
                </S.Div1>
                <S.Div1>
                    <Input type='text' placeholder='Email' autoComplete='email'></Input>
                    <Input type='text' placeholder='Phone Number'></Input>
                </S.Div1>
                <Input $messagebox type='text' placeholder='Message'></Input>
                <Button $primary type='submit'>Submit now</Button>
            </Form>
        </Container>
    )
}

export default Contact;