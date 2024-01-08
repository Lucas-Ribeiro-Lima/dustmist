'use client'

import { ErrorMSG } from "@/components/error/Error";
import { Modal } from "@/components/modal/Modal";

export default function Error() {
    return(
        <Modal>
            <ErrorMSG>Error...</ErrorMSG>
        </Modal>
    )
}