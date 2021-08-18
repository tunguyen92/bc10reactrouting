import "./App.css";
import PageNotFound from "./containers/PageNotFound";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { routesAdmin, routesHome } from "./routes";
import HomeTemplate from "./containers/HomeTemplate";
import AdminTemplate from "./containers/AdminTemplate";
import AuthPage from "./containers/AdminTemplate/Auth";

function App() {
  const renderLayoutHome = (routes) => {
    return routes?.map((item, index) => {
      return (
        <HomeTemplate
          key={index}
          exact={item.exact}
          path={item.path}
          Component={item.component}
        />
      );
    });
  };

  const renderLayoutAdmin = (routes) => {
    return routes?.map((item, index) => {
      return (
        <AdminTemplate
          key={index}
          exact={item.exact}
          path={item.path}
          Component={item.component}
        />
      );
    });
  };

  return (
    <BrowserRouter>
      <Switch>
        {renderLayoutHome(routesHome)}
        {renderLayoutAdmin(routesAdmin)}

        {/* Auth */}
        <Route path="/auth" component={AuthPage} />

        {/* Trang không tồn tại nằm cuối */}
        <Route path="" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
