import { Button, PrimaryTitle, SubTitle } from "@/styles/global-styles";
import { AboutMeContainer, PortraitElipse } from "./AboutMeStyle";
import Image from "next/image";

export const AboutMe = () => {
    return (
        <AboutMeContainer id="AboutMe">
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
            <PortraitElipse $elipse1>
                <PortraitElipse $elipse2>
                    <Image src="/perfil-image3.jpg" width={375} height={650} alt="Imagem do proprietário"></Image>
                </PortraitElipse>
            </PortraitElipse>
        </AboutMeContainer>
    )
};
  
export default AboutMe;