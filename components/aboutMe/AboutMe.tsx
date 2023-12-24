import Portrait from "./Portrait";
import * as S from "./Style"
import Image from "next/image";

export const AboutMe = () => {
    return (
        <S.Container>
            <S.Description>
                <div>
                    Hi, I am<br></br> 
                    Lucas Ribeiro Lima
                </div>
                <span>Frontend Developer</span>
                <div>
                    <S.Button $primary>
                        Download CV
                    </S.Button>
                    <S.Button>
                        Learn More
                    </S.Button>
                </div>                
            </S.Description>
            <Portrait></Portrait>
        </S.Container>
    )
};
  
export default AboutMe;