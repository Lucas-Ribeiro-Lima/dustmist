import { Container } from "./global-style";
import Layout from "@/components/layout/Layout";
import AboutMe from "@/components/aboutMe/AboutMe";
import Contact from "@/components/contact/Contact";
import Header from "@/components/header/Header";
import Competencies from "@/components/compentencies/Competencies";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
      <Container>
        <Layout>
            <Header></Header>
            <AboutMe></AboutMe>
            <Competencies></Competencies>
            <Contact></Contact>
            <Footer></Footer>
        </Layout>
      </Container>
    )
}
