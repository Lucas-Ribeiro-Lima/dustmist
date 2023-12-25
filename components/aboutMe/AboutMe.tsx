import { Button, PrimaryTitle, SubTitle } from "@/styles/Styles";
import * as S from "./AboutMeStyle"
import Image from "next/image";

export const AboutMe = () => {
    return (
        <S.Container>
            <div>
                <PrimaryTitle $marginBottom={0}>
                    Hi, I am<br></br> 
                    Lucas Ribeiro Lima
                </PrimaryTitle>
                <SubTitle>Frontend Developer</SubTitle>
                <div>
                    <Button $primary>
                        Download CV
                    </Button>
                    <Button>
                        Learn More
                    </Button>
                </div>                
            </div>
            <S.PortraitElipse $elipse1>
                <S.PortraitElipse $elipse2>
                    <Image src="/perfil-image3.jpg" width={375} height={650} alt="Imagem do proprietário"></Image>
                </S.PortraitElipse>
            </S.PortraitElipse>
        </S.Container>
    )
};
  
export default AboutMe;