import React, { useEffect, useState } from "react";
import { Box, Button, Fade } from "@mui/material";
import {
    Link,
    useLocation,
    useNavigate,
    useSearchParams,
} from "react-router-dom";
import VideoLayout from "../layout/VideoLayout";
import { useRecoilState, useSetRecoilState } from "recoil";
import { authTokenAtom } from "../recoils/auth";
import { emailInfoAtom, profileInfoAtom } from "../recoils/emails";

const Home = () => {
    const navigate = useNavigate();
    const [authToken, setAuthToken] = useRecoilState(authTokenAtom);
    const [searchParams, _setSearchParams] = useSearchParams();
    const setEmailInfo = useSetRecoilState(emailInfoAtom);
    const setProfileInfo = useSetRecoilState(profileInfoAtom);
    const [whypage, setWhypage] = useState(false);

    useEffect(() => {
        const initialize = async () => {
            if (searchParams) {
                const accessToken = searchParams.get("access_token");
                const name = searchParams.get("name");
                const picture = searchParams.get("picture");
                const email = searchParams.get("email");
                if (accessToken && name && picture && email) {
                    setAuthToken(accessToken);
                    setEmailInfo(email);
                    setProfileInfo({
                        displayName: name,
                        photo: picture,
                    });
                } else {
                    console.table({
                        accessToken,
                        name,
                        picture,
                        email,
                    });
                    throw new Error(`The missing value(s) as accessToken`);
                }

                // 로컬스토리지
                localStorage.setItem("access", accessToken);
                localStorage.setItem("googleName", name);
                localStorage.setItem("googleEmail", email);
                localStorage.setItem("googlePicture", picture);
            }
        };
        initialize();
    }, []);

    return (
        <VideoLayout url={`${process.env.PUBLIC_URL}/server-room.MOV`}>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "end",
                    alignItems: "center",
                    p: 3,
                }}
            >
                {!whypage && (
                    <Fade
                        in={!whypage}
                        style={{
                            transitionDelay: "300ms",
                            transitionDuration: "700ms",
                        }}
                    >
                        <Box
                            sx={{
                                mt: "30vh",
                                color: "white",
                                fontWeight: 700,
                                fontSize: "5rem",
                                textAlign: "end",
                            }}
                        >
                            More Emails, Bigger Footprint.
                            <br />
                            Let's Change That.
                        </Box>
                    </Fade>
                )}
                {!whypage && (
                    <Fade
                        in={!whypage}
                        style={{
                            transitionDelay: "1000ms",
                            transitionDuration: "700ms",
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",

                                alignItems: "center",
                            }}
                        >
                            <Button
                                variant="outlined"
                                size="large"
                                color="secondary"
                                sx={{
                                    textTransform: "none",
                                    fontSize: "1.3rem",
                                    borderWidth: "2px",
                                    borderRadius: 2,
                                    background: "rgba(255, 255, 255, 10%)",
                                    mt: 7,
                                    "&:hover": {
                                        borderWidth: "2px",
                                        borderRadius: 2,
                                        background: "rgba(255, 255, 255, 20%)",
                                        mt: 7,
                                    },
                                }}
                                onClick={() => {
                                    console.log(
                                        "Clicking Start! and Now auth is:",
                                        authToken
                                    );
                                    if (authToken) {
                                        navigate(`/filter`);
                                    } else {
                                        navigate(`/auth`);
                                    }
                                }}
                            >
                                Start →
                            </Button>
                            <Button
                                sx={{
                                    color: "white",
                                    mt: 2,
                                    textTransform: "none",
                                    textDecoration: "underline",
                                }}
                                onClick={() => setWhypage(true)}
                            >
                                Why?
                            </Button>
                        </Box>
                    </Fade>
                )}
                {whypage && (
                    <Fade
                        in={whypage}
                        style={{
                            transitionDelay: "300ms",
                            transitionDuration: "700ms",
                        }}
                    >
                        <Box>
                            <Box
                                sx={{
                                    // mt: "10vh",
                                    color: "white",
                                    // fontWeight: 700,
                                    fontSize: "1.3rem",
                                    // textAlign: "end",
                                    p: "100px 200px",
                                    pb: 0,
                                }}
                            >
                                Did you know that sending and receiving emails
                                are enlarging your carbon footprint? Depending
                                on the type of email that is sent and received:
                                <br />
                                <br />
                                <b>
                                    An average spam email: 0.3 g CO2e (carbon
                                    dioxide equivalent)
                                    <br /> A standard email: 4 g CO2e <br />
                                    An email with “long and tiresome
                                    attachments”: 50 g CO2e <br /> <br />
                                </b>
                                The amount of CO2e is compiled up from the data
                                centers that are built to regulate the data
                                built up. <br />
                                <br />
                                According to Data Center Knowledge, data
                                centers, on an average, take up to 1% of the all
                                the electricity that is consumed in the world.
                                This does not look too much when talking in
                                percentage, but 65 mails that are sent is equal
                                to carbon emissions released when driving 1 mile
                                forward! <br /> <br /> If every person on earth
                                deleted 10 spam mails, it could save 1,725,000
                                gigabytes of storage space which equal to 55.2
                                million kilowatts of power. Whether you ended up
                                here on the website for fun, or with purpose to
                                save the environment, take the step in changing
                                the world!
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                <Button
                                    variant="outlined"
                                    size="large"
                                    color="secondary"
                                    sx={{
                                        textTransform: "none",
                                        fontSize: "1.3rem",
                                        borderWidth: "2px",
                                        borderRadius: 2,
                                        background: "rgba(255, 255, 255, 10%)",
                                        mt: 5,

                                        "&:hover": {
                                            borderWidth: "2px",
                                            borderRadius: 2,
                                            background:
                                                "rgba(255, 255, 255, 20%)",
                                            mt: 5,
                                        },
                                    }}
                                    onClick={() => {
                                        console.log(
                                            "Clicking Start! and Now auth is:",
                                            authToken
                                        );
                                        if (authToken) {
                                            navigate(`/filter`);
                                        } else {
                                            navigate(`/auth`);
                                        }
                                    }}
                                >
                                    Start →
                                </Button>
                            </Box>
                        </Box>
                    </Fade>
                )}
            </Box>
        </VideoLayout>
    );
};

export default Home;
