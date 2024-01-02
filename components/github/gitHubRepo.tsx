import GitHubRepoFrame from "./gitHubRepoFrame";

async function GetGithubRepo() {

    const request = await fetch('https://api.github.com/users/Lucas-Ribeiro-Lima/repos');
    const response = await request.json();
    
    return response;
}

export default async function GithubRepo () {

    const GitUser = await GetGithubRepo();
    console.log(GitUser)

    return(
            <>
                {GitUser.map(({id, name, description, html_url, created_at}) => {
                    return(<GitHubRepoFrame id={id} name={name} description={description} url={html_url} created={created_at}></GitHubRepoFrame>)
                })}
            </>
    )
}