import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Blog from "./components/Blog";


export const routes = [
    {path: '/', component: Home, name: 'Home'},
    {path: '/about', component: AboutMe, name: 'AboutMe'},
    {path: '/work', component: Work, name: 'Work'},
    {path: '/skills', component: Skills, name: 'Skills'},
    {path: '/blog', component: Blog, name: 'Blog'}
];