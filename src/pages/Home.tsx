import React, { useEffect, useState } from "react";
import { Box, Button, Fade } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import VideoLayout from "../layout/VideoLayout";
import { useRecoilState, useSetRecoilState } from "recoil";
import { authTokenAtom } from "../recoils/auth";
import { emailInfoAtom, profileInfoAtom } from "../recoils/emails";
import { requestToken } from "../utils/requestToken";

const Home = () => {
    const navigate = useNavigate();
    const [authToken, setAuthToken] = useRecoilState(authTokenAtom);
    const loca = useLocation();
    const navi = useNavigate();
    const setEmailInfo = useSetRecoilState(emailInfoAtom);
    const setProfileInfo = useSetRecoilState(profileInfoAtom);
    const [whypage, setWhypage] = useState(false);
    const [loginClicked, setLoginClicked] = useState(false);

    useEffect(() => {
        const initialize = async () => {
            if (loginClicked) {
                alert(loca.hash);
                if (loca.hash) {
                    const hash = loca.hash.substring(1);
                    console.log(hash);
                    // accesstoken
                    const matchedStr = hash.match(/access_token=.*?&/);
                    const accStr = matchedStr ? matchedStr[0] : "";
                    console.log(accStr);
                    const accList = accStr.split("=");
                    const accessTokenValue = accList[1].substring(
                        0,
                        accList[1].length - 1
                    );
                    setAuthToken(accessTokenValue);

                    // name
                    const matchedEmail = hash.match(/name=.*?&/);
                    const matchedName = hash.match(/name=.*?&/);
                    const matchedPhoto = hash.match(/photo=.*?&/);
                    const matchedEmailStr = matchedEmail ? matchedEmail[0] : "";
                    const matchedNameStr = matchedName ? matchedName[0] : "";
                    const matchedPhotoStr = matchedPhoto ? matchedPhoto[0] : "";
                    const emailList = matchedEmailStr.split("=");
                    const nameList = matchedNameStr.split("=");
                    const photoList = matchedPhotoStr.split("=");
                    const emailValue = emailList[1];
                    const nameValue = nameList[1];
                    const photoValue = photoList[1];
                    localStorage.setItem("access", accessTokenValue);
                    localStorage.setItem("email", emailValue);
                    localStorage.setItem("name", nameValue);
                    localStorage.setItem("photo", photoValue);

                    setEmailInfo(emailValue);
                    setProfileInfo({
                        displayName: nameValue,
                        photo: photoValue,
                    });
                } else {
                    await requestToken();
                }
            }
        };
        initialize();
    }, [loginClicked]);

    useEffect(() => {
        console.log(authToken);
    }, [authToken]);

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
                                        setLoginClicked(true);
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