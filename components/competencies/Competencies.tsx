import { CompentenciesContainer, Competencie, Skills, SkillsContainer } from './CompetenciesStyle';
import { Container, SecondaryTitle } from '@/styles/global-styles';
import Image from 'next/image';

export const Competencies = () => {
    return (
        <Container id='Competencies'>
            <SecondaryTitle>What I do</SecondaryTitle>
            <CompentenciesContainer>
                <Competencie>
                    <Image src='/software-development.svg' width={57} height={46.474} alt='Software Development Icon'></Image>
                    <div>
                        Software Development
                    </div>
                    <span></span>
                </Competencie>
                <Competencie>
                    <Image src='/web-development.svg' width={57} height={46.474} alt='Web Development Icon'></Image>
                    <div>
                        Web Development
                    </div>
                    <span></span>
                </Competencie>
                <Competencie>
                    <Image src='/web-design.svg' width={57} height={46.474} alt='Web Design Icon'></Image>
                    <div>
                        DevOps
                    </div>
                    <span></span>
                </Competencie>
            </CompentenciesContainer>
            <SecondaryTitle>My Skills</SecondaryTitle>
            <SkillsContainer>
                <Skills>
                    80%
                    <span>HTML</span>
                </Skills>
                <Skills>
                    70%
                    <span>CSS</span>
                </Skills>
                <Skills>
                    50%
                    <span>JAVASCRIPT</span>
                </Skills>
                <Skills>
                    70%
                    <span>NEXT.JS</span>
                </Skills>
            </SkillsContainer>
        </Container>
    )
}

export default Competencies;