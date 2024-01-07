'use client'

import { Container, PrimaryTitle, SecondaryTitle, SubTitle, UnderlineSpan } from "./gitHubStyle"
import Link from "next/link";
import Image from 'next/image'
import { useEffect, useState } from "react";
import Loading from "@/app/loading";
import { ErrorTitle } from "@/styles/global-styles";
import { GithubIcon } from "lucide-react";

interface GitHubUserData {
    name: string;
    bio: string;
    avatar_url: string;
    company: string;
    location: string;
    html_url: string;
}

async function getGithubUser(): Promise<GitHubUserData> {

    const GitToken = process.env.GITHUB_FINE_TOKEN

    try {
        const request = await fetch(`https://api.github.com/users/Lucas-Ribeiro-Lima`, {
            // method: "GET",
            // headers: {
            //     "Authorization": `Bearer ${GitToken}`,
            // }
        });
        const response = await request.json();
        return response;
    }
    catch (error) {
        throw new Error(error);
    }

}

export default function GithubUser() {

    const [gitUser, setGitUser] = useState<GitHubUserData | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    const fetchData = async () => {
        const response = await getGithubUser()
        setGitUser(response)
    }

    useEffect(() => {
        try {
            fetchData()
        }
        catch (error) {
            console.error(`Erro na chama assíncrona: ${error.message}`)
            setError("Ocorreu um erro ao obter os dados do usuário.");
        }
        finally {
            setLoading(false)
        }
    }, [])

    if (loading) return (
        <Loading></Loading>
    )

    if (error) return (
        <ErrorTitle>
            {error}
        </ErrorTitle>
    )

    if (gitUser) return (
        <Container $flexRowContainer $padding={10}>
            <Image src={gitUser.avatar_url} width={150} height={150} alt="GitHub Image"></Image>
            <Container>
                <Link href={gitUser.html_url}>
                    <PrimaryTitle>
                        {gitUser.name}
                        <GithubIcon width={50} height={50}></GithubIcon>
                    </PrimaryTitle>
                </Link>
                <Container $padding={30}>
                    {gitUser.bio}
                    <br></br>
                    <SubTitle>{gitUser.company}-{gitUser.location}</SubTitle>
                </Container>
            </Container>
        </Container>
    )
}