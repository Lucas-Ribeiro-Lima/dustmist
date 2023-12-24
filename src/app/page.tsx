import Layout from "@/components/layout/Layout";
import { Container } from "./global-style";
import AboutMe from "@/components/aboutMe/AboutMe";
import Compentencies from "@/components/compentencies/Compentencies";
import Contact from "@/components/contact/Contact";
import Header from "@/components/header/Header";

export default function Home() {
  return (
      <Container>
        <Layout>
            <Header></Header>
            <AboutMe></AboutMe>
            <Compentencies></Compentencies>
            <Contact></Contact>
        </Layout>
      </Container>
    )
}
