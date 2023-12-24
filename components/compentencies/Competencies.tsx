import * as S from './Style'
import Image from 'next/image';

export const Competencies = () => {
    return (
        <S.Container>
            <h2>What i do</h2>
            <S.Grid>
                <div>
                    <Image src='/software-development.svg' width={57} height={46.474} alt='Software Development Icon'></Image>
                    Software Development
                    <span></span>
                </div>
                <div>
                    <Image src='/web-development.svg' width={57} height={46.474} alt='Web Development Icon'></Image>
                    Web Development
                    <span></span>
                </div>
                <div>
                    <Image src='/web-design.svg' width={57} height={46.474} alt='Web Design Icon'></Image>
                    DevOps
                    <span></span>
                </div>
            </S.Grid>
            <h2>My Skills</h2>
            <S.Skills>
                <div>
                    70%
                    <span>HTML</span>
                </div>
                <div>
                    60%
                    <span>CSS</span>
                </div>
                <div>
                    30%
                    <span>JAVASCRIPT</span>
                </div>
                <div>
                    50%
                    <span>NEXT.JS</span>
                </div>
            </S.Skills>
        </S.Container>
    )
}

export default Competencies;