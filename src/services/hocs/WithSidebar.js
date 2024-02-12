import React from 'react';
import Sidebar from "../../components/sideBar/Sidebar";

const WithSideBar = ({children, ...props}) =>
	<>
		<Sidebar {...props}/>
		{children}
	</>;

export default WithSideBar;
