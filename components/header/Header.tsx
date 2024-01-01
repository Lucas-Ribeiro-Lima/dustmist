import { MainTitle } from '@/styles/global-styles';
import { HeaderContainer, Navbar } from './HeaderStyle';
import Link from 'next/link';

const Header = () => {
    return (
        <HeaderContainer>
            <MainTitle>Lucas Lima</MainTitle>
            <Navbar>
                <ul>
                    <li>
                        <Link href="/#AboutMe">About Me</Link>
                    </li>
                    <li>
                        <Link href="/#Competencies">Services</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact Me</Link>
                    </li>
                </ul>
            </Navbar>
        </HeaderContainer>
    )
}

export default Header;