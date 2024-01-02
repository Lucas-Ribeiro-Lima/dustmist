import { ContactForm } from "@/components/contact/ContactForm";
import { Modal } from "@/components/modal/Modal";

export default async    function Contact() {

    return(
        <Modal>
            <ContactForm></ContactForm>
        </Modal>
    )
}