import * as S from "./Style"
import Image from "next/image"

const Portrait = () => {
    return (
        <S.PortraitElipse $elipse1>
            <S.PortraitElipse $elipse2>
                <Image src="/perfil-image3.jpg" width={375} height={650} alt="Imagem do proprietário"></Image>
            </S.PortraitElipse>
        </S.PortraitElipse>
    )
}

export default Portrait