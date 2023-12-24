import * as S from './Style'

export const Contact = () => {
    return (
        <S.Container>
            <h2>Get in touch</h2>
            <form>
                <input type='text' placeholder='Name'></input>
                <input type='text' placeholder='Last Name'></input>
                <input type='text' placeholder='Email'></input>
                <input type='text' placeholder='Phone Number'></input>
                <input type='text' placeholder='Message'></input>
                <S.Button $primary type='submit'>Submit now</S.Button>
            </form>
        </S.Container>
    )
}

export default Contact;