'use client'

import { ContainerModal, BigButton } from "@/styles/global-styles"
import { ReactNode, createContext, useState } from "react"


type ModalContextType = {
    isOpen: boolean,
    toggleModal: () => void,
}

type ModalProviderType = {
    openButtonText: string,
    children: ReactNode,
}

export const ModalContext = createContext({} as ModalContextType)

export function ModalProvider({ children, openButtonText}: ModalProviderType) {

    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen)
    }

    return (
        <ModalContext.Provider value={{ isOpen, toggleModal }}>            
            {isOpen && (
                <ContainerModal>
                    {children}
                </ContainerModal>
            )}
            <BigButton onClick={toggleModal}> {openButtonText} </BigButton>
        </ModalContext.Provider>
    )
}