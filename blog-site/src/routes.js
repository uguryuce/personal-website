import Home from "./components/personal/Home";
import Blog from "./components/blog/Blog";
import Application from "./components/personal/Application";
import WorkSpace from "./components/personal/WorkSpace";
import About from "./components/personal/About";
import Post from "./components/Post";

export const routes = [
  {path: "/", component: Home, name: "Home"},
  {path: "/blog", component: Blog, name: "Blog"},

  {path: '/post/:id', component: Post, name: 'Post'},

  {path: "/about", component: About, name: "About"},
  {path: "/work-space", component: WorkSpace, name: "WorkSpace"},
  {path: "/application", component: Application, name: "Application"}
];
