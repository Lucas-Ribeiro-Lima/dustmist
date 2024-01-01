'use client'

import { ErrorMSG } from "@/components/error/Error";
import { Modal } from "@/components/modal/Modal";
import { PrimaryTitle } from "@/styles/global-styles";

export default function Error() {
    return(
        <Modal>
            <ErrorMSG></ErrorMSG>
        </Modal>
    )
}