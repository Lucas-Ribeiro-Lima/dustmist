import { Container, PrimaryTitle, SecondaryTitle, SubTitle } from "@/styles/global-styles"
import Link from "next/link";
import Image from 'next/image'

async function GetGithubUser() {

    const request = await fetch('https://api.github.com/users/Lucas-Ribeiro-Lima');
    const response = await request.json();

    return response;
}

type GitHubUserData = {
    id: number;
    login: string;
    bio: string;
    url: string;
    company: string;
    location: string;
}

export default async function GithubUser () {

    const GitUser = await GetGithubUser();

    return(
        <Container $BackgroundContainer="#333">
            <Container $flexRowContainer>
                <Container>
                    <PrimaryTitle>
                        <Link href={GitUser.html_url}>
                            {GitUser.login}
                        </Link>
                    </PrimaryTitle>
                    <SecondaryTitle>
                        {GitUser.bio}
                    </SecondaryTitle>
                </Container>
            <Image src={GitUser.avatar_url} width={200} height={200} alt="GitHub Image"></Image>
            </Container>
            <SecondaryTitle></SecondaryTitle>
            <SubTitle>{GitUser.company}-{GitUser.location}</SubTitle>
        </Container>
    )
}