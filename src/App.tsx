import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Auth from "./auth/Auth";
import Test from "./auth/Test";
import Filter from "./pages/Filter";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Result from "./pages/Result";

function App() {
    console.log(process.env.PUBLIC_URL);
    return (
        <RecoilRoot>
            <BrowserRouter basename={`${process.env.PUBLIC_URL}`}>
                <Routes>
                    <Route path={`/`} element={<Home />} />
                    <Route path={`/filter`} element={<Filter />} />
                    <Route path={`/auth*`} element={<Auth />} />
                    <Route path={`/test`} element={<Test />} />
                    <Route path={`/result`} element={<Result />} />
                </Routes>
                {/* <Route path={`*`} element={<NotFound />} /> */}
            </BrowserRouter>
        </RecoilRoot>
    );
}

export default App;
