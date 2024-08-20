import React, { memo, useEffect } from "react";
import { Provider } from "react-redux";
import { Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history, store } from "./store";
import { getLocalStorageItem, getSystemLanguage, setLocalStorageItem } from "./services/Helper";
import { LanguageProvider } from "./services/LanguageContext";
import PrivateRoute from "./components/routeWrappers/PrivateRoute";
import MainPage from "./client/mainPage/components/MainPage";
import AdminPage from "./admin/components/AdminPage";
import GamePage from "./client/gamePage/components/GamePage";

const App = () => {
	useEffect(() => {
		const savedLanguage = getLocalStorageItem("language");
		if (!savedLanguage) setLocalStorageItem("language", getSystemLanguage());
	}, []);

	return (
		<LanguageProvider>
			{/* <Provider store={store}> */}
			{/* 	<ConnectedRouter history={history}> */}
					<Switch>
						<PrivateRoute exact path="/" component={null} />

						<PrivateRoute exact path="/joy" component={MainPage} />
						<PrivateRoute exact path="/joy/game/:id" component={GamePage} />
						<PrivateRoute exact path={["/joy/admin", "/joy/admin/:tab"]} component={AdminPage} />
						{/* <Route exact path="/sign-in" component={SignIn} /> */}
					</Switch>
				{/* </ConnectedRouter> */}
			{/* </Provider> */}
		</LanguageProvider>
	);
};

export default memo(App);
