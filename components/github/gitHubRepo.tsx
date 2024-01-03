import { Container } from "./gitHubStyle";
import GitHubRepoFrame from "./gitHubRepoFrame";

export interface GitHubRepoData {
    id: number;
    name: string;
    description: string;
    html_url: string;
    created_at: string;
}

async function getGithubRepo(): Promise<GitHubRepoData[]> {

    const GitToken = process.env.GITHUB_FINE_TOKEN

    let CachedGitRepos: GitHubRepoData[]

    if (CachedGitRepos == undefined) {
        const request = await fetch('https://api.github.com/users/Lucas-Ribeiro-Lima/repos', {
            headers: {
                "Authorization": `token ${GitToken}`,
            }
        });
        const response = await request.json();

        CachedGitRepos = response

        return response;
    }

    else {
        return CachedGitRepos
    }

}

export default async function GithubRepo() {

    const GitRepos = await getGithubRepo();

    return (
        <Container $flexColContainer $gap={60} $backgroundColor="#171717">
            {GitRepos.map(({ id, name, description, html_url, created_at }) => {
                return (<GitHubRepoFrame key={id} id={id} name={name} description={description} html_url={html_url} created_at={created_at}></GitHubRepoFrame>)
            })}
        </Container>
    )
}