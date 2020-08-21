import React from 'react';

import './style.scss';
import Helmet from './helmet';
import Navbar from './navbar';

const Layout = ({ children }) => (
	<div class="everything">
		<Helmet />
		<Navbar />
		{children}
	</div>
);

export default Layout;
