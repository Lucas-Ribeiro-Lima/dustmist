import Portrait from "./Portrait"
import * as S from "./Style"

const Apresentation = () => {
    return (
        <S.Container>
            <S.Apresentation>
                <h1>
                    Hi, I am<br></br> 
                    Lucas Ribeiro Lima
                </h1>
                <span>Frontend Developer</span>
                <div>
                    <S.Button $primary>
                        Download CV
                    </S.Button>
                    <S.Button>
                        Learn More
                    </S.Button>
                </div>                
            </S.Apresentation>
            <Portrait></Portrait>
        </S.Container>
    )
}

export default Apresentation;