import React, { useEffect, useState } from "react";
import { Box, Button, Fade } from "@mui/material";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import VideoLayout from "../layout/VideoLayout";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { authTokenAtom } from "../recoils/auth";
import { emailInfoAtom, profileInfoAtom } from "../recoils/emails";
import { getUserInfo } from "../apis/getUserInfo";

const Result = () => {
    const [search, setSearch] = useSearchParams({ count: "0" });
    return (
        <VideoLayout url={`${process.env.PUBLIC_URL}/nature.MOV`}>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "end",
                    alignItems: "center",
                    p: 3,
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
                            mt: "20vh",
                            color: "white",
                            fontWeight: 700,
                            fontSize: "5rem",
                            textAlign: "start",
                        }}
                    >
                        You Reduced
                        <br />
                        {(
                            Number(search.get("count")) * 35
                        ).toLocaleString()}{" "}
                        grams of CO2
                    </Box>
                </Fade>

                <Fade
                    in={true}
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
                        <Box
                            sx={{
                                mt: 3,
                                color: "white",
                                fontWeight: 600,
                                fontSize: "2rem",
                                textAlign: "start",
                            }}
                        >
                            Individuals Like You Can Make a Difference for the
                            Future!
                        </Box>
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
                        >
                            Share
                        </Button>
                    </Box>
                </Fade>
            </Box>
        </VideoLayout>
    );
};

export default Result;
