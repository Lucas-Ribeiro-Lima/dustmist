import Image from "next/image"
import Link from "next/link"
import { DescriptionContainer } from "./DescriptionStyle"
import { Container, SecondaryTitle } from "@/styles/global-styles"

import * as Pallete from "../../styles/variables"


const Description = () => {
    return (
        <DescriptionContainer id="Description">
                <SecondaryTitle>About</SecondaryTitle>
                <main>
                    I am a software engineering student, actively engaged in developing personal projects to enhance my skills and gain practical experience. Since childhood, I have harbored a passion for technology and consistently demonstrated a natural ability to grasp its concepts effortlessly. This inherent affinity propels me to constantly seek challenges and refine my knowledge in the field.
                </main>
                <Container>
                    <ul>
                        <li>
                            <Image src="/descriptionIcon.svg" width={65} height={65} alt="Description Icon"></Image>
                            <Container  $textColor={Pallete.GREEN_COLOR}>
                                Name
                            </Container>
                            <Container>
                                Lucas
                            </Container>
                        </li>
                        <li>
                            <Image src="/descriptionIcon.svg" width={65} height={65} alt="Description Icon"></Image>
                            <Container $textColor={Pallete.GREEN_COLOR}>
                                Email 
                            </Container>
                            <Container>
                                lucasribeirolima974@gmail.com
                            </Container>
                        </li>
                        <li>
                            <Image src="/descriptionIcon.svg" width={65} height={65} alt="Description Icon"></Image>
                            <Container  $textColor={Pallete.GREEN_COLOR}>
                                Instagram
                            </Container>
                            <Container>
                                <Link href="https://www.instagram.com/lucas.rl7/">
                                    @lucas.rl7
                                </Link>
                            </Container>
                        </li>
                        <li>
                            <Image src="/descriptionIcon.svg" width={65} height={65} alt="Description Icon"></Image>
                            <Container  $textColor={Pallete.GREEN_COLOR}>
                                Phone
                            </Container>
                            <Container>
                                31984961351
                            </Container>
                        </li>
                    </ul>
                </Container>
        </DescriptionContainer>
    )
}

export default Description