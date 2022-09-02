import Home from "../Components/Pages/Home";
import About from "../Components/Pages/About";
import Work from "../Components/Pages/Work";
import Resume from "../Components/Pages/Resume";
import Contact from "../Components/Pages/Contact";

export const MenuItems = [
    {
        title: "Home",
        link: "/",
        element: <Home/>
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