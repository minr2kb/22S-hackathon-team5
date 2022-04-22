import { Box, Button } from "@mui/material";
import React from "react";

interface DeleteEmailsProps {
    handleBack: () => void;
}

const DeleteEmails: React.FC<DeleteEmailsProps> = ({ handleBack }) => {
    return (
        <>
            <img
                style={{
                    width: "100%",
                    height: "55vh",
                    objectFit: "scale-down",
                }}
                alt="mail-pile"
                src={`${process.env.REACT_APP_RESOURCE_PATH}/mail-pile.webp`}
            />

            <Box
                sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}
            >
                <Button variant="outlined" onClick={handleBack}>
                    Back
                </Button>
                <Button
                    // onClick={handleNext}
                    // loading={loading}
                    variant="contained"
                >
                    Done
                </Button>
            </Box>
        </>
    );
};

export default DeleteEmails;
