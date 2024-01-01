'use client'

import { ErrorMSG } from "@/components/error/Error";
import { Container } from "@/styles/global-styles";

export default function Error () {
    return(
        <Container>
            <ErrorMSG></ErrorMSG>
        </Container>
    )
}