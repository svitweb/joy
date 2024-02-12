import React from "react";
import { Provider } from "react-redux";
import { history, store } from "./store";
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch, Redirect } from "react-router-dom";
import MainPage from "./pages/mainPage/components/MainPage";
import AdminPage from "./pages/admin/components/AdminPage";
import ListPage from "./pages/listPage/ListPage";
import SignIn from "./pages/signIn/SignIn";
import PrivateRoute from "./components/routeWrappers/PrivateRoute";

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <PrivateRoute exact path="/admin" component={AdminPage} />


        <PrivateRoute exact path="/" component={MainPage} />
        <PrivateRoute exact path="/list/:listId" component={ListPage} />
        <Route exact path="/sign-in" component={SignIn} />
      </Switch>
    </ConnectedRouter>
  </Provider>
);

export default App;
