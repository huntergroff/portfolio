import About from "../Components/Pages/About";
import Work from "../Components/Pages/Work";
import Resume from "../Components/Pages/Resume";
import Contact from "../Components/Pages/Contact";
import Home from "../Components/Pages/Home";
import Projects from "../Components/Pages/Projects";

export const MenuItems = [
    {
        title: "Home",
        link: "/",
        element: <Home />
    },
    {
        title: "About",
        link: "/about",
        element: <About/>
    },
    {
        title: "Work",
        link: "/work",
        element: <Work/>
    },
    {
        title: "Projects",
        link: "/projects",
        element: <Projects />
    },
    {
        title: "Resume",
        link: "/resume",
        element: <Resume/>
    },
    {
        title: "Contact",
        link: "/contact",
        element: <Contact />
    }
]