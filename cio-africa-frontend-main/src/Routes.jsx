
import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Desktop from "pages/Desktop";

const ProjectRoutes = () => {
  useRoutes([
	{ path: "/", element: <Home /> },
	{ path: "*", element: <NotFound /> },
	{ path: "desktop", element: <Desktop /> },
  ]);
};

export default ProjectRoutes;