import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Work from "./components/Work";


export const routes = [
    {path: '/', component: Home, name: 'Home'},
    {path: '/about', component: AboutMe, name: 'AboutMe'},
    {path: '/work', component: Work, name: 'Work'}
];