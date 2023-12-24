import { Container, SecondaryTitle } from '@/styles/Styles';
import * as S from './CompetenciesStyle'
import Image from 'next/image';

export const Competencies = () => {
    return (
        <Container>
            <SecondaryTitle>What i do</SecondaryTitle>
            <S.Div1>
                <S.Div2>
                    <Image src='/software-development.svg' width={57} height={46.474} alt='Software Development Icon'></Image>
                    <div>
                        Software Development
                    </div>
                    <span></span>
                </S.Div2>
                <S.Div2>
                    <Image src='/web-development.svg' width={57} height={46.474} alt='Web Development Icon'></Image>
                    <div>
                        Web Development
                    </div>
                    <span></span>
                </S.Div2>
                <S.Div2>
                    <Image src='/web-design.svg' width={57} height={46.474} alt='Web Design Icon'></Image>
                    <div>
                        DevOps
                    </div>
                    <span></span>
                </S.Div2>
            </S.Div1>
            <SecondaryTitle>My Skills</SecondaryTitle>
            <S.Skills>
                <S.Div3>
                    70%
                    <span>HTML</span>
                </S.Div3>
                <S.Div3>
                    60%
                    <span>CSS</span>
                </S.Div3>
                <S.Div3>
                    30%
                    <span>JAVASCRIPT</span>
                </S.Div3>
                <S.Div3>
                    50%
                    <span>NEXT.JS</span>
                </S.Div3>
            </S.Skills>
        </Container>
    )
}

export default Competencies;