import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
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
        path: "contact",
        element: <Contact />,
      },
      {
        path: "projects",
        element: <ProjectView />,
      },
    ],
  },
];

export default routes;
