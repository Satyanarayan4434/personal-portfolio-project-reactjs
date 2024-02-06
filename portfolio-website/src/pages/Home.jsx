import HeroPage from "../components/HeroPage";
import WhoPage from "../components/WhoPage";
import Skills from "../components/Skills";
import ProjectsPage from "../components/ProjectsPage";
import ContactPage from "../components/ContactSection";
import Footer from "../components/Footer";
const Home = () => {
    return (
        <div className="pt-[7.5rem]">
            <HeroPage/>  
            <WhoPage/>
            <Skills/>
            <ProjectsPage/>
            <ContactPage/>
            <Footer/>
        </div>
        
    );
}

export default Home;
