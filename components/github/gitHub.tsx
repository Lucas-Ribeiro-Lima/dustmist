'use client'

import GithubRepo from "./gitHubRepo";
import GithubUser from "./gitHubUser";
import { Container } from "./gitHubStyle";

export default function GitHub () {
    return(
        <Container $flexRowContainer $height={100} $backgroundColor="#171717" $gap={20}>
            <Container $alignself="start">
                <GithubUser></GithubUser>
            </Container>
            <Container $flexColContainer $height={80} $backgroundColor="#171717" $alignself="start">
                <GithubRepo></GithubRepo>
            </Container>
        </Container>
    )
}