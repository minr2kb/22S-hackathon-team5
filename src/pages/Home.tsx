import React from "react";
import { Box, Button, Fade } from "@mui/material";
import { useNavigate } from "react-router-dom";
import VideoLayout from "../layout/VideoLayout";
import { useRecoilValue } from "recoil";
import { authTokenAtom } from "../recoils/auth";

const Home = () => {
    const navigate = useNavigate();
    const authToken = useRecoilValue(authTokenAtom);

    return (
        <VideoLayout>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "end",
                    alignItems: "center",
                }}
            >
                <Fade
                    in={true}
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
                        More emails, bigger footprint.
                        <br />
                        Let's Change that.
                    </Box>
                </Fade>

                <Fade
                    in={true}
                    style={{
                        transitionDelay: "1000ms",
                        transitionDuration: "700ms",
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
                                navigate(
                                    `${process.env.REACT_APP_RESOURCE_PATH}/filter`
                                );
                            } else {
                                navigate(
                                    `${process.env.REACT_APP_RESOURCE_PATH}/auth`
                                );
                            }
                        }}
                    >
                        Start →
                    </Button>
                </Fade>
            </Box>
        </VideoLayout>
    );
};

export default Home;
