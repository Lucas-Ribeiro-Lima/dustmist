import { Container, SecondaryTitle, SubTitle } from "@/styles/global-styles";
import Link from "next/link";

interface GitHubRepoFrameData{
    id: number;
    name: string;
    description: string;
    url: string;
    created: string;
}

export default function GitHubRepoFrame({id, name, description, url, created}: GitHubRepoFrameData) {
    return(
        <Container key={id} $BackgroundContainer="#333">
            <SecondaryTitle>
                <Link href={url}>
                    {name}
                </Link>
            </SecondaryTitle>
            <SubTitle>{created}</SubTitle>
            <Container>
                {description}
            </Container>
        </Container>
    )
}