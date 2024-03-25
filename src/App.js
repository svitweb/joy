import React, {memo} from "react";
import { Provider } from "react-redux";
import { history, store } from "./store";
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch } from "react-router-dom";
import MainPage from "./pages/mainPage/components/MainPage";
import AdminPage from "./pages/admin/components/AdminPage";
import PrivateRoute from "./components/routeWrappers/PrivateRoute";

const App = () => (
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<Switch>
				<PrivateRoute exact path="/joy" component={MainPage} />
				<PrivateRoute exact path={["/admin", "/admin/:tab"]} component={AdminPage} />
				{/* <Route exact path="/sign-in" component={SignIn} /> */}
			</Switch>
		</ConnectedRouter>
	</Provider>
);

export default memo(App);
