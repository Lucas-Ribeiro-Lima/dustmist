'use client'

import GithubRepo from "./gitHubRepo";
import GithubUser from "./gitHubUser";
import { Container } from "./gitHubStyle";

export default function GitHubPage() {
    return (
        <Container $flexRowContainer $gap={20} $backgroundColor="#171717" $margin={30}>
            <Container $width={35} $padding={10}>
                <GithubUser></GithubUser>
            </Container>
            <Container $height={60} $backgroundColor="#171717">
                <GithubRepo></GithubRepo>
            </Container>
        </Container>
    )
}
