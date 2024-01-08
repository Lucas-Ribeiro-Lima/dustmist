import { Container, ErrorTitle } from "@/styles/global-styles";

export function ErrorMSG({ children }) {
    return (
        <Container>
            <ErrorTitle>
                {children}
            </ErrorTitle>
        </Container>
    )
}