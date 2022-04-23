import { LoadingButton } from "@mui/lab";
import {
    Box,
    Button,
    LinearProgress,
    LinearProgressProps,
    Typography,
} from "@mui/material";
import React, { useState } from "react";
import useInterval from "../utils/useInterval";
import Confetti from "react-confetti";
import { useNavigate } from "react-router-dom";

interface DeleteEmailsProps {
    handleBack: () => void;
}

function LinearProgressWithLabel(
    props: LinearProgressProps & { value: number }
) {
    return (
        <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ width: "100%", mr: 1 }}>
                <LinearProgress variant="determinate" {...props} />
            </Box>
            <Box sx={{ minWidth: 35 }}>
                <Typography
                    variant="body2"
                    color="text.secondary"
                >{`${Math.round(props.value)}%`}</Typography>
            </Box>
        </Box>
    );
}

const DeleteEmails: React.FC<DeleteEmailsProps> = ({ handleBack }) => {
    const [progress, setProgress] = useState(10);
    const navigate = useNavigate();

    useInterval(
        () => {
            setProgress((prevProgress) => prevProgress + 10);
        },
        progress < 100 ? 1000 : null
    );

    return (
        <>
            {progress >= 100 && (
                <Confetti
                    numberOfPieces={100}
                    colors={[
                        // "#f44336",
                        // "#e91e63",
                        // "#9c27b0",
                        // "#673ab7",
                        // "#3f51b5",
                        // "#2196f3",
                        // "#03a9f4",
                        // "#00bcd4",
                        "#1ECCA2",
                        "#70CAA1",
                        "#009688",
                        "#4CAF50",
                        "#CDDC39",
                        // "#FFEB3B",
                        // "#FFC107",
                        // "#FF9800",
                        // "#FF5722",
                        // "#795548",
                    ]}
                />
            )}
            <Box
                sx={{
                    width: "100%",
                    height: "35vh",
                }}
            >
                <Box sx={{ mt: "20vh" }}>
                    <Box
                        sx={{
                            width: `${progress * 0.93}%`,
                            height: "60px",
                            transition: "width ease 0.6s",
                            backgroundImage: `url(${process.env.REACT_APP_RESOURCE_PATH}/green.png)`,
                            backgroundColor: "#fff",
                            backgroundRepeat: "repeat-x",

                            backgroundSize: "auto 100%",
                        }}
                    ></Box>

                    <LinearProgressWithLabel value={progress} />
                    <Typography
                        color={
                            progress < 100 ? "text.secondary" : "primary.main"
                        }
                        textAlign={"center"}
                    >
                        {progress < 100
                            ? progress < 50
                                ? "Deleting emails..."
                                : "Reducing CO2..."
                            : "Done!"}
                    </Typography>
                </Box>
            </Box>
            <Box
                sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}
            >
                <Button
                    variant="outlined"
                    disabled={progress < 100}
                    onClick={handleBack}
                >
                    Back
                </Button>

                <LoadingButton
                    onClick={() =>
                        navigate(
                            `${process.env.REACT_APP_RESOURCE_PATH}/result`
                        )
                    }
                    loading={progress < 100}
                    variant="contained"
                >
                    Done
                </LoadingButton>
            </Box>
        </>
    );
};

export default DeleteEmails;
