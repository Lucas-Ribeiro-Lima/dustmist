import { GitHubRepoData } from "./gitHubRepo";
import { Container, SecondaryTitle, SubTitle } from "./gitHubStyle"
import Link from "next/link";


export default function GitHubRepoFrame({id, name, description, html_url, created_at }: GitHubRepoData) {
    return (
        <Container key={id} $padding={16}>  
            <SecondaryTitle>
                <Link href={html_url}>
                    {name}
                </Link>
            </SecondaryTitle>
            <SubTitle>{created_at}</SubTitle>
            <Container>
                {description}
            </Container>
        </Container>
    )
}