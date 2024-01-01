'use client'

import { Button, ContainerModal, ModalBackDrop } from "@/styles/global-styles"
import { ReactNode, useEffect, useRef} from "react"
import { useRouter } from "next/navigation"
import { createPortal } from "react-dom"

type ModalType = {
    children: ReactNode
}

export function Modal({ children }: ModalType) {

    const router = useRouter();
    const dialogRef = useRef(null);

    useEffect(() => {
        //@ts-ignore
        if (!dialogRef.current?.open) {
            //@ts-ignore
            dialogRef.current?.showModal();
        }
    }, []);

    function onDismiss() {
        router.back();
    };

    return createPortal(
        <ModalBackDrop>
            <ContainerModal ref={dialogRef} onClose={onDismiss}>
                {children}
                {/* <Button $close onClick={onDismiss}>Cancel</Button> */}
            </ContainerModal>        
        </ModalBackDrop>,
        document.getElementById('modal-root')
    );
}