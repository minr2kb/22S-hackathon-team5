import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { authTokenAtom } from "../recoils/auth";
import { oauth2SignIn } from "../utils/getAuthToken";

const Auth = () => {
    const [accessToken, setAccessToken] = useRecoilState(authTokenAtom);
    const navi = useNavigate();

    useEffect(() => {
        oauth2SignIn();
    }, []);
    useEffect(() => {
        if (accessToken) {
            console.log("accesstoken: ", accessToken);
            navi(`/`);
        }
    }, [accessToken]);
    return (
        <Box textAlign={"center"}>
            <Typography variant="h5" sx={{ mt: "40vh" }}>
                Auth Waiting...
            </Typography>
        </Box>
    );
};

export default Auth;
