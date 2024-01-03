import { Container, PrimaryTitle, SecondaryTitle, SubTitle } from "./gitHubStyle"
import Link from "next/link";
import Image from 'next/image'

interface GitHubUserData {
    login: string;
    bio: string;
    avatar_url: string;
    html_url: string;
    company: string;
    location: string;
}

async function getGithubUser(): Promise<GitHubUserData> {

    const GitToken = process.env.GITHUB_FINE_TOKEN

    let cachedGitUser: GitHubUserData
    
    if (cachedGitUser == undefined){
        const request = await fetch('https://api.github.com/users/Lucas-Ribeiro-Lima', {
            headers: {
                "Authorization": `token ${GitToken}`,
            }
        });
        const response = await request.json();

        cachedGitUser= response

        return response;
    }

    else {
        return cachedGitUser
    }

}

export default async function GithubUser() {

    const gitUser = await getGithubUser()

    return (
        <Container>
            <Container>
                <PrimaryTitle>
                    <Link href={gitUser.html_url}>
                        {gitUser.login}
                    </Link>
                </PrimaryTitle>
                <Container $flexRowContainer $gap={60}>
                    <SecondaryTitle>
                        {gitUser.bio}
                    </SecondaryTitle>
                    <Image src={gitUser.avatar_url} width={150} height={150} alt="GitHub Image"></Image>
                </Container>
            </Container>
            <SecondaryTitle></SecondaryTitle>
            <SubTitle>{gitUser.company}-{gitUser.location}</SubTitle>
        </Container>
    )
}