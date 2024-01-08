'use client'

import { Modal } from "@/components/modal/Modal";
import { Container, ErrorTitle } from "@/styles/global-styles";

export default function Feedback({ children }) {

  // useEffect(() => {
  //   new Promise<void>(() => {
  //     setTimeout((DismissModal), 3000)
  //   })
  // })

  // const router = useRouter()

  // async function DismissModal() {
  //   router.back()
  // }

  return (
    <Modal>
      <Container>
        <ErrorTitle> {children} </ErrorTitle>
        {/* <Button $close onClick={DismissModal}>Close</Button> */}
      </Container>
    </Modal>
  )
}