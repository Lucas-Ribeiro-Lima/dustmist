import Image from "next/image"
import Link from "next/link"
import { DescriptionContainer } from "./DescriptionStyle"
import { SecondaryTitle } from "@/styles/global-styles"

const Description = () => {
    return (
        <DescriptionContainer id="Description">
                <SecondaryTitle>About</SecondaryTitle>
                <main>
                    I am a software engineering student, actively engaged in developing personal projects to enhance my skills and gain practical experience. Since childhood, I have harbored a passion for technology and consistently demonstrated a natural ability to grasp its concepts effortlessly. This inherent affinity propels me to constantly seek challenges and refine my knowledge in the field.
                </main>
                <div>
                    <ul>
                        <li>
                            <Image src="/descriptionIcon.svg" width={65} height={65} alt="Description Icon"></Image>
                            <div>
                                Name 
                            </div>
                            <div>
                                Lucas
                            </div>
                        </li>
                        <li>
                            <Image src="/descriptionIcon.svg" width={65} height={65} alt="Description Icon"></Image>
                            <div>
                                Email 
                            </div>
                            <div>
                                lucasribeirolima974@gmail.com
                            </div>
                        </li>
                        <li>
                            <Image src="/descriptionIcon.svg" width={65} height={65} alt="Description Icon"></Image>
                            <div>
                                Instagram
                            </div>
                            <div>
                                <Link href="https://www.instagram.com/lucas.rl7/">
                                    @lucas.rl7
                                </Link>
                            </div>
                        </li>
                        <li>
                            <Image src="/descriptionIcon.svg" width={65} height={65} alt="Description Icon"></Image>
                            <div>
                                Phone
                            </div>
                            <div>
                                (31) 98496-1351
                            </div>
                        </li>
                    </ul>
                </div>
        </DescriptionContainer>
    )
}

export default Description