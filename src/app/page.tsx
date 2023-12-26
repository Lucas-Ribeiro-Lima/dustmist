import AboutMe from "@/components/aboutMe/AboutMe";
import Contact from "@/components/contact/Contact";
import Header from "@/components/header/Header";
import Competencies from "@/components/competencies/Competencies";
import Footer from "@/components/footer/Footer";
import Description from "@/components/description/Description";

export default function Home() {
  return (
      <div>
        <Header></Header>
        <AboutMe></AboutMe>
        <Description></Description>
        <Competencies></Competencies>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    )
}
