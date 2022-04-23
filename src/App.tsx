import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Auth from "./auth/Auth";
import Test from "./auth/Test";
import Filter from "./pages/Filter";

import Home from "./pages/Home";

function App() {
    return (
        <RecoilRoot>
            <BrowserRouter basename={`${process.env.PUBLIC_URL}`}>
                <Routes>
                    <Route path={`/`} element={<Home />} />
                    <Route path={`/filter`} element={<Filter />} />
                    <Route path={`/auth*`} element={<Auth />} />
                    <Route path={`/test`} element={<Test />} />
                </Routes>
            </BrowserRouter>
        </RecoilRoot>
    );
}

export default App;
