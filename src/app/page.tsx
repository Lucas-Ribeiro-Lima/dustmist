import AboutMe from "@/components/aboutMe/AboutMe";
import Header from "@/components/header/Header";
import Competencies from "@/components/competencies/Competencies";
import Footer from "@/components/footer/Footer";
import GitHub from "@/components/github/gitHub";
import Description from "@/components/description/Description";
import { Contact } from "@/components/contact/Contact";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <AboutMe></AboutMe>
      <Description></Description>
      <Competencies></Competencies>
      <GitHub></GitHub>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}
