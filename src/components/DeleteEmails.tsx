import { Box, Button } from "@mui/material";
import React from "react";

interface DeleteEmailsProps {
    handleBack: () => void;
}

const DeleteEmails: React.FC<DeleteEmailsProps> = ({ handleBack }) => {
    return (
        <>
            <Box
                sx={{
                    width: "100%",
                    height: "55vh",

                    backgroundImage: `url(${process.env.REACT_APP_RESOURCE_PATH}/mail-pile.webp)`,
                    backgroundRepeat: "repeat",
                }}
            ></Box>

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
