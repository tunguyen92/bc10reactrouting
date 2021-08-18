import AddUser from "../containers/AdminTemplate/AddUser";
import Dashboard from "../containers/AdminTemplate/Dashboard";
import AboutPage from "../containers/HomeTemplate/AboutPage";
import DetailMoviePage from "../containers/HomeTemplate/DetailMoviePage";
import HOCPage from "../containers/HomeTemplate/HOCPage";
import HomePage from "../containers/HomeTemplate/HomePage";
import HooksPage from "../containers/HomeTemplate/HooksPage";
import ListMoviePage from "../containers/HomeTemplate/ListMoviePage";
import MaterialPage from "../containers/HomeTemplate/MaterialPage";
import RenderProps from "../containers/HomeTemplate/RenderProps";
import StyledComponentPage from "../containers/HomeTemplate/StyledComponentPage";

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
  {
    exact: false,
    path: "/material",
    component: MaterialPage,
  },
  {
    exact: false,
    path: "/styled",
    component: StyledComponentPage,
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
