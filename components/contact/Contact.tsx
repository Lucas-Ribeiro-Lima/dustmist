import { Container, SecondaryTitle } from "@/styles/global-styles";
import { ModalProvider } from "../modal/Modal";
import { ContactForm } from "./ContactForm";

export function Contact () {
    return(
        <Container id="Contact">
            <SecondaryTitle>Get in touch</SecondaryTitle>
            <ModalProvider openButtonText="Contact Me">
                <ContactForm></ContactForm>
            </ModalProvider>
        </Container>
    )
}