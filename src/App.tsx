import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Auth from "./auth/Auth";
import Filter from "./pages/Filter";

import Home from "./pages/Home";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="filter" element={<Filter />} />
				<Route path="auth" element={<Auth />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
