'use client'

import { useEffect, useState } from "react";
import { ErrorTitle } from "@/styles/global-styles";
import { Container } from "./gitHubStyle";
import Loading from "@/app/loading";
import GitHubRepoFrame from "./gitHubRepoFrame";

export interface GitHubRepoData {
    id: number;
    name: string;
    description: string;
    html_url: string;
    created_at: string;
    language: string;
}

async function getGithubRepo(): Promise<GitHubRepoData[]> {

    const gitToken = process.env.GITHUB_FINE_TOKEN

    try {
        const request = await fetch('https://api.github.com/users/Lucas-Ribeiro-Lima/repos', {
            // headers: {
            //     "Authorization":`Bearer ${gitToken}`,
            // }
        });
        const response = await request.json();

        return response;
    }
    catch (error) {
        throw new Error(error);
    }
}

export default function GithubRepo() {

    const [ gitRepos, setGitRepos ] = useState<GitHubRepoData[]>([]);    
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    const fetchData = async () => {
        const response = await getGithubRepo()
        setGitRepos(response)
    };

    useEffect(() => {
        try{
            fetchData();
        }
        catch(error){
            console.error(`Erro na chama assíncrona: ${error.message}`)
            setError("Ocorreu um erro ao obter os repositórios do usuário.");
        }
        finally{
            setLoading(false)
        }
    }, [])

    if (loading) return (<Loading></Loading>)

    if (error) return(<ErrorTitle>{error}</ErrorTitle>)

    if(gitRepos) return (
        <Container $flexColContainer $gap={30} $backgroundColor="#171717">
            {gitRepos.map(({ id, name, description, html_url, created_at, language }) => {
                return (<GitHubRepoFrame key={id} id={id} name={name} description={description} html_url={html_url} created_at={created_at} language={language}></GitHubRepoFrame>)
            })}
        </Container>
    )
}