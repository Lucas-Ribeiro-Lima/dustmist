import { MainTitle } from '@/styles/Styles';
import * as S from './Style'

const Header = () => {
    return (
        <S.Container>
            <MainTitle>Lucas Lima</MainTitle>
            <S.Navbar>
                <ul>
                    <li>
                        About Me
                    </li>
                    <li>
                        Services
                    </li>
                    <li>
                        Contact Me
                    </li>
                </ul>
            </S.Navbar>
        </S.Container>
    )
}

export default Header;