'use client'

import GithubRepo from "./gitHubRepo";
import GithubUser from "./gitHubUser";
import { Container, UnderlineSpan } from "./gitHubStyle";

export default function GitHubPage() {
    return (
        <Container $flexRowContainer $gap={20} $backgroundColor="#171717" $margin={30}>
            <Container $width={35}>
                <GithubUser></GithubUser>
                <UnderlineSpan></UnderlineSpan>
            </Container>
            <Container $height={60} $backgroundColor="#171717">
                <GithubRepo></GithubRepo>
            </Container>
        </Container>
    )
}
