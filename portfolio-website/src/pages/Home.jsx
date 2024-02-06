import HeroPage from "../components/HeroPage";
import WhoPage from "../components/WhoPage";
import Skills from "../components/Skills";
import ProjectsPage from "../components/ProjectsPage";
import ContactPage from "../components/ContactSection";
const Home = () => {
    return (
        <div className="pt-[7.5rem]">
            <HeroPage/>  
            <WhoPage/>
            <Skills/>
            <ProjectsPage/>
            <ContactPage/>
        </div>
        
    );
}

export default Home;
