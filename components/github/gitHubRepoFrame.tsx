import { GitHubRepoData } from "./gitHubRepo";
import { Container, LanguageSpan, SecondaryTitle, SubTitle, UnderlineSpan } from "./gitHubStyle"
import Link from "next/link";


export default function GitHubRepoFrame({ id, name, description, html_url, created_at, language }: GitHubRepoData) {

    const str_name = String(name).toUpperCase()

    return (
        <Container key={id} $width={90} $padding={20}>
            <SecondaryTitle>
                <Link href={html_url}>{str_name}</Link>
            </SecondaryTitle>
            <LanguageSpan>
                {language}
            </LanguageSpan>
            <div>
                {description}
            </div>
        </Container>
    )
}