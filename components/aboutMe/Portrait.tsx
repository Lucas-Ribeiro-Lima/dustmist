import * as S from "./Style"
import Image from "next/image"

const Portrait = () => {
    return (
        <S.PortraitElipse $elipse1>
            <S.PortraitElipse $elipse2>
                <Image src="/Dustmist/dustmist/public/perfil-image2.jpg" width={650} height={650} alt="Imagem do proprietário"></Image>
            </S.PortraitElipse>
        </S.PortraitElipse>
    )
}

export default Portrait