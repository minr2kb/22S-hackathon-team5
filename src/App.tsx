import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Auth from "./auth/Auth";
import Filter from "./pages/Filter";

import Home from "./pages/Home";

function App() {
    return (
        <RecoilRoot>
            <BrowserRouter>
                <Routes>
                    <Route
                        path={`${process.env.REACT_APP_RESOURCE_PATH}/`}
                        element={<Home />}
                    />
                    <Route
                        path={`${process.env.REACT_APP_RESOURCE_PATH}/filter`}
                        element={<Filter />}
                    />
                    <Route
                        path={`${process.env.REACT_APP_RESOURCE_PATH}/auth`}
                        element={<Auth />}
                    />
                </Routes>
            </BrowserRouter>
        </RecoilRoot>
    );
}

export default App;
