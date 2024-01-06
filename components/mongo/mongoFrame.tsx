import { ContactData } from "./mongoLayout"
import { ContainerFrame, Field, FieldSpan } from "./styles"

export function MongoFrame({ id, name, last_name, email, phone, message }: ContactData) {
    return (
        <ContainerFrame>
            <Field>
                <FieldSpan>Name: </FieldSpan>
                {name} {last_name}
            </Field>
            <Field>
                <FieldSpan>Email: </FieldSpan>
                {email}
            </Field>
            <Field>
                <FieldSpan>Phone: </FieldSpan>
                {phone}
            </Field>
            <Field>
                <FieldSpan>Message: </FieldSpan>
                {message}
            </Field>
        </ContainerFrame>
    )
}