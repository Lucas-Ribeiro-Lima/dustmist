import react, {ReactNode, FC} from 'react'
import * as S from './Style'

interface LayoutProps {
    children: ReactNode
}
 
 const Layout:FC<LayoutProps> = ({children}) => {
    return (
        <S.Layout>
            {children}
        </S.Layout>
    )
 }

 export default Layout