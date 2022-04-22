import React from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				{/* <Route path="about" element={<About />} /> */}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
