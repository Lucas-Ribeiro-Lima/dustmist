import * as S from "./Style"
import Image from "next/image"
import Link from "next/link"

const Description = () => {
    return (
        <S.Description>
                <h2>About</h2>
                <main>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</main>
                <div>
                    <ul>
                        <li>
                            <Image src="/descriptionIcon.svg" width={65} height={65} alt="Description Icon"></Image>
                            <div>
                                Full Name 
                            </div>
                            <div>
                                Lucas Ribeiro Lima
                            </div>
                        </li>
                        <li>
                            <Image src="/descriptionIcon.svg" width={65} height={65} alt="Description Icon"></Image>
                            <div>
                                Email 
                            </div>
                            <div>
                                lucasribeirolima
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
                                (31) 984961251
                            </div>
                        </li>
                    </ul>
                </div>
        </S.Description>
    )
}

export default Description