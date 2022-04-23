import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { authTokenAtom } from "../recoils/auth";
import { oauthSignIn } from "../utils/getAuthToken";

const Auth = () => {
    const [accessToken, setAccessToken] = useRecoilState(authTokenAtom);
    const loca = useLocation();
    const navi = useNavigate();

    useEffect(() => {
        if (loca.hash) {
            const hash = loca.hash.substring(1);
            console.log(hash);
            const matchedStr = hash.match(/access_token=.*?&/);
            const accStr = matchedStr ? matchedStr[0] : "";
            console.log(accStr);
            const accList = accStr.split("=");
            const accessTokenValue = accList[1].substring(
                0,
                accList[1].length - 1
            );
            setAccessToken(accessTokenValue);
            localStorage.setItem("access", accessTokenValue);
        } else {
            oauthSignIn();
        }
    }, []);
    useEffect(() => {
        if (accessToken) {
            console.log("accesstoken: ", accessToken);
            navi(`/`);
        }
    }, [accessToken]);
    return (
        <Box textAlign={"center"}>
            <Typography variant="h4">Auth Waiting...</Typography>
        </Box>
    );
};

export default Auth;
