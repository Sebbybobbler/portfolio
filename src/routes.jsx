import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import ProjectView from "./components/ProjectView/ProjectView";

const routes = [
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "projects",
        element: <ProjectView />,
      },
    ],
  },
];

export default routes;
