import React, { memo, useEffect } from "react";
import { Switch } from "react-router-dom";
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
			<Switch>
				<PrivateRoute exact path="/" component={MainPage} />
				<PrivateRoute exact path="/game/:id" component={GamePage} />
				<PrivateRoute exact path={["/admin", "/admin/:tab"]} component={AdminPage} />
				{/* <Route exact path="/sign-in" component={SignIn} /> */}
			</Switch>
		</LanguageProvider>
	);
};

export default memo(App);
