'use client'

import { Modal } from "@/components/modal/Modal";
import { Button, Container, PrimaryTitle } from "@/styles/global-styles";
import { useRouter } from 'next/navigation'
import { useEffect } from "react";


export default function Sucess() {

    useEffect(() => {
        new Promise<void>(() => {
            setTimeout((DismissModal), 3000)
        })
    }, [])

    const router = useRouter()

    async function DismissModal() {
        router.back()
    }

    return(
        <Modal>
            <Container>
                <PrimaryTitle>Sucess submiting form!</PrimaryTitle>
                <Button $close onClick={DismissModal}>Close</Button>
            </Container>
        </Modal>
    )
}