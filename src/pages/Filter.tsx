import React, { useState, useEffect } from "react";
import {
    Box,
    Fade,
    Stepper,
    Step,
    StepLabel,
    Divider,
    Avatar,
    Typography,
} from "@mui/material";
import CommonLayout from "../layout/CommonLayout";
import SetFilters from "../components/SetFilters";
import CheckEmails from "../components/CheckEmails";
import { useRecoilState, useRecoilValue } from "recoil";
import { profileInfoAtom } from "../recoils/emails";
import { authTokenAtom } from "../recoils/auth";
import DeleteEmails from "../components/DeleteEmails";

const steps = ["Set Filters", "Check Emails", "Delete Emails"];

const Filter = () => {
    const [activeStep, setActiveStep] = useState<number>(0);
    const [profile, setProfile] = useRecoilState(profileInfoAtom);
    const authToken = useRecoilValue(authTokenAtom);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    console.log(profile);

    return (
        <CommonLayout>
            <Box
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "end",
                    alignItems: "center",
                }}
            >
                <Box sx={{ width: "100%", maxWidth: "720px" }}>
                    <Box sx={{ width: "100%", mt: 7 }}>
                        <Stepper activeStep={activeStep} alternativeLabel>
                            {steps.map((label) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                    </Box>

                    <Fade
                        in={true}
                        style={{
                            transitionDelay: "100ms",
                            transitionDuration: "500ms",
                        }}
                        // in={true}
                        // style={{
                        //     transitionDelay: "500ms",
                        //     transitionDuration: "500ms",
                        // }}
                    >
                        <Box
                            sx={{
                                width: "100%",

                                mt: 3,
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                }}
                            >
                                <Box
                                    sx={{
                                        // color: "white",
                                        fontWeight: 700,
                                        fontSize: "2rem",
                                    }}
                                >
                                    {steps[activeStep]}
                                </Box>
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    <Avatar
                                        src={profile?.photo?.url}
                                        sx={{ width: 32, height: 32 }}
                                    />
                                    <Typography sx={{ ml: 2, mr: 2 }}>
                                        {profile?.displayName}
                                    </Typography>
                                </Box>
                            </Box>
                            <Divider sx={{ mb: 3, mt: 1 }} />
                        </Box>
                    </Fade>
                    <Fade
                        in={true}
                        style={{
                            transitionDelay: "400ms",
                            transitionDuration: "500ms",
                        }}
                    >
                        <Box>
                            {activeStep === 0 && (
                                <SetFilters handleNext={handleNext} />
                            )}
                            {activeStep === 1 && (
                                <CheckEmails
                                    handleNext={handleNext}
                                    handleBack={handleBack}
                                />
                            )}
                            {activeStep === 2 && (
                                <DeleteEmails handleBack={handleBack} />
                            )}
                        </Box>
                    </Fade>
                </Box>
            </Box>
        </CommonLayout>
    );
};

export default Filter;
