'use client'

import GithubRepo from "./gitHubRepo";
import GithubUser from "./gitHubUser";
import { Container } from "@/styles/global-styles";

export default function GitHub () {
    return(
        <Container $gapDistance={40} $flexRowContainer>
            <Container>
                <GithubUser></GithubUser>
            </Container>
            <Container>
                <GithubRepo></GithubRepo>
            </Container>
        </Container>
    )
}