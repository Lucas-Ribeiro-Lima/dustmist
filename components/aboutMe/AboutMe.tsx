import { Button, Container, PrimaryTitle, SubTitle } from "@/styles/global-styles";
import { AboutMeContainer, PortraitElipse } from "./AboutMeStyle";
import Image from "next/image";
import Link from "next/link";
import { DownloadButton } from "./DonwloadButton";

const CurriculumURL = process.env.CURRICULUM_URL

export const AboutMe = () => {
    return (
        <AboutMeContainer id="AboutMe">
            <div>
                <PrimaryTitle $marginBottom={0}>
                    Hi, I am<br></br> 
                    Lucas Ribeiro Lima
                </PrimaryTitle>
                <SubTitle>Frontend Developer</SubTitle>
                <Container $flexRowContainer>
                    <DownloadButton url={CurriculumURL}></DownloadButton>
                    <Button>
                        <Link href="/#">Learn More</Link>
                    </Button>
                </Container>                
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