import { BigButton, Container } from "@/styles/global-styles";
import Link from "next/link";

export function Contact() {
    return (
        <Container>
            <BigButton id="Contact">
                <Link href='/contact'>
                    Get in touch
                </Link>
            </BigButton>
        </Container>
    )
}