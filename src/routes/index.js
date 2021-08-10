import HomePage from "../containers/HomeTemplate/HomePage";
import AboutPage from "../containers/HomeTemplate/AboutPage";
import ListMoviePage from "../containers/HomeTemplate/ListMoviePage";
import DetailMoviePage from "../containers/HomeTemplate/DetailMoviePage";
import Dashboard from "../containers/AdminTemplate/Dashboard";
import AddUser from "../containers/AdminTemplate/AddUser";
import HOCPage from "../containers/HomeTemplate/HOCPage";
import RenderProps from "../containers/HomeTemplate/RenderProps";
import HooksPage from "../containers/HomeTemplate/HooksPage";

const routesHome = [
  {
    exact: true,
    path: "/",
    component: HomePage,
  },
  {
    exact: false,
    path: "/about",
    component: AboutPage,
  },
  {
    exact: false,
    path: "/list-movie",
    component: ListMoviePage,
  },
  {
    exact: false,
    path: "/detail/:id",
    component: DetailMoviePage,
  },
  {
    exact: false,
    path: "/hoc",
    component: HOCPage,
  },
  {
    exact: false,
    path: "/render-props",
    component: RenderProps,
  },
  {
    exact: false,
    path: "/hooks",
    component: HooksPage,
  },
];

const routesAdmin = [
  {
    exact: false,
    path: "/dashboard",
    component: Dashboard,
  },
  {
    exact: false,
    path: "/add-user",
    component: AddUser,
  },
];

export { routesHome, routesAdmin };
