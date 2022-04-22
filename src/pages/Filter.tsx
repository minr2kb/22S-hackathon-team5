import React, { useState } from "react";
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

const steps = ["Set Filters", "Check Emails", "Delete Emails"];

const Filter = () => {
    const [activeStep, setActiveStep] = useState<number>(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

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
                    <Fade
                        in={true}
                        style={{
                            transitionDelay: "300ms",
                            transitionDuration: "500ms",
                        }}
                    >
                        <Box sx={{ width: "100%", mt: 7 }}>
                            <Stepper activeStep={activeStep} alternativeLabel>
                                {steps.map((label) => (
                                    <Step key={label}>
                                        <StepLabel>{label}</StepLabel>
                                    </Step>
                                ))}
                            </Stepper>
                        </Box>
                    </Fade>
                    <Fade
                        in={true}
                        style={{
                            transitionDelay: "500ms",
                            transitionDuration: "500ms",
                        }}
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
                                    <Avatar sx={{ width: 30, height: 30 }} />
                                    <Typography sx={{ ml: 2, mr: 2 }}>
                                        User
                                    </Typography>
                                </Box>
                            </Box>
                            <Divider sx={{ mb: 3, mt: 1 }} />
                        </Box>
                    </Fade>
                    {activeStep === 0 && <SetFilters handleNext={handleNext} />}
                </Box>
            </Box>
        </CommonLayout>
    );
};

export default Filter;
